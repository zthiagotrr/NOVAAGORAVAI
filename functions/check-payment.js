const { getSupabase } = require("./lib/supabase");
const crypto = require("crypto");

function sha256(value) {
  if (!value) return null;
  return crypto.createHash("sha256").update(String(value).toLowerCase().trim()).digest("hex");
}

const GOTHAM_BASE = "https://api.gothampaybr.com";

function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    },
    body: JSON.stringify(body),
  };
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      },
      body: "",
    };
  }

  const clientId = process.env.GOTHAM_CLIENT_ID;
  const clientSecret = process.env.GOTHAM_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return jsonResponse(500, {
      success: false,
      error: "Configure GOTHAM_CLIENT_ID e GOTHAM_CLIENT_SECRET nas variaveis de ambiente",
    });
  }

  let transactionId = event.queryStringParameters?.id || event.queryStringParameters?.transactionId;
  if (event.httpMethod === "POST") {
    try {
      const body = event.body ? JSON.parse(event.body) : {};
      transactionId = body?.transactionId || body?.id || transactionId;
    } catch {}
  }

  if (!transactionId) {
    return jsonResponse(400, { success: false, error: "Informe o transactionId" });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  let statusResp;
  let text = "";
  try {
    statusResp = await fetch(`${GOTHAM_BASE}/api/v1/pix/cashin/${encodeURIComponent(transactionId)}`, {
      method: "GET",
      headers: {
        "X-Client-Id": clientId,
        "X-Client-Secret": clientSecret,
      },
      signal: controller.signal,
    });
    text = await statusResp.text();
  } catch (err) {
    clearTimeout(timeout);
    return jsonResponse(502, { success: false, error: "Falha ao consultar status: " + String(err) });
  } finally {
    clearTimeout(timeout);
  }

  let data = {};
  try {
    data = JSON.parse(text);
  } catch {
    data = {};
  }

  if (!statusResp.ok) {
    return jsonResponse(statusResp.status, { success: false, error: text || "Erro ao consultar pagamento" });
  }

  const rawStatus = (data.status || "PENDING").toUpperCase();
  const paid = rawStatus === "PAID" || rawStatus === "COMPLETED" || rawStatus === "APROVADO" || rawStatus === "CONCLUIDO";
  const status = paid ? "paid" : rawStatus.toLowerCase();
  const paidAt = data.paidAt || data.paid_at || data.dataPagamento || null;

  try {
    const supabase = getSupabase();

    if (paid) {
      const { data: txData } = await supabase
        .from("transactions")
        .select("status, customer_name, customer_email, customer_phone, customer_cpf, amount")
        .eq("transaction_id", transactionId)
        .single();

      const alreadyPaid = txData?.status === "paid";

      await supabase
        .from("transactions")
        .update({ status, paid_at: paidAt || new Date().toISOString() })
        .eq("transaction_id", transactionId);

      if (!alreadyPaid && txData) {
        const nowTs = new Date().toISOString().replace("T", " ").split(".")[0];
        const amountValue = Number(txData.amount) || 49.90;
        const amountCents = Math.round(amountValue * 100);

        // Headers do cliente (vindos do polling do frontend)
        const headers = event.headers || {};
        const clientIp =
          headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
          headers["x-real-ip"] ||
          headers["client-ip"] ||
          null;
        const clientUserAgent = headers["user-agent"] || null;
        const cookieHeader = headers["cookie"] || "";
        const fbpMatch = cookieHeader.match(/_fbp=([^;]+)/);
        const fbcMatch = cookieHeader.match(/_fbc=([^;]+)/);
        const fbp = fbpMatch ? fbpMatch[1] : null;
        const fbc = fbcMatch ? fbcMatch[1] : null;
        const referer = headers["referer"] || headers["origin"] || null;

        // ── Facebook Conversions API ──────────────────────────────────
        const fbToken = process.env.FACEBOOK_ACCESS_TOKEN;
        const fbPixelId = process.env.FACEBOOK_PIXEL_ID || "4327697327497010";
        if (fbToken && !fbToken.startsWith("COLE_")) {
          const nameParts = (txData.customer_name || "").trim().split(/\s+/);
          const emHash = sha256(txData.customer_email);
          const phHash = sha256("55" + (txData.customer_phone || "").replace(/\D/g, ""));
          const fnHash = sha256(nameParts[0]);
          const lnHash = sha256(nameParts.slice(1).join(" ") || nameParts[0]);
          const cpfHash = sha256((txData.customer_cpf || "").replace(/\D/g, ""));
          const countryHash = sha256("br");

          const userData = {};
          if (emHash) userData.em = [emHash];
          if (phHash) userData.ph = [phHash];
          if (fnHash) userData.fn = [fnHash];
          if (lnHash) userData.ln = [lnHash];
          if (cpfHash) userData.external_id = [cpfHash];
          if (countryHash) userData.country = [countryHash];
          if (clientIp) userData.client_ip_address = clientIp;
          if (clientUserAgent) userData.client_user_agent = clientUserAgent;
          if (fbp) userData.fbp = fbp;
          if (fbc) userData.fbc = fbc;

          const fbEvent = {
            event_name: "Purchase",
            event_time: Math.floor(Date.now() / 1000),
            action_source: "website",
            event_id: transactionId,
            user_data: userData,
            custom_data: {
              currency: "BRL",
              value: amountValue,
              content_ids: ["livro-falante"],
              content_type: "product",
              content_name: "Livro Falante",
              num_items: 1,
            },
          };
          if (referer) fbEvent.event_source_url = referer;

          const fbPayload = { data: [fbEvent] };

          try {
            const fbResp = await fetch(
              `https://graph.facebook.com/v20.0/${fbPixelId}/events?access_token=${encodeURIComponent(fbToken)}`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(fbPayload),
              }
            );
            const fbBody = await fbResp.text();
            if (!fbResp.ok) {
              console.error("[Facebook CAPI] Erro:", fbResp.status, fbBody);
            } else {
              console.log("[Facebook CAPI] Conversão enviada:", transactionId, fbBody);
            }
          } catch (e) {
            console.error("[Facebook CAPI] Falha:", e);
          }
        } else {
          console.warn("[Facebook CAPI] FACEBOOK_ACCESS_TOKEN não configurado");
        }

        // ── Utmify Orders API ─────────────────────────────────────────
        const utmifyToken = process.env.UTMIFY_API_TOKEN || process.env.UTMIFY_PIXEL_ID;
        if (utmifyToken) {
          try {
            const utmResp = await fetch("https://api.utmify.com.br/api-credentials/orders", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "x-api-token": utmifyToken,
              },
              body: JSON.stringify({
                orderId: transactionId,
                platform: "GothamPay",
                paymentMethod: "pix",
                status: "paid",
                createdAt: nowTs,
                approvedDate: nowTs,
                refundedAt: null,
                customer: {
                  name: txData.customer_name || "",
                  email: txData.customer_email || "",
                  phone: (txData.customer_phone || "").replace(/\D/g, "") || null,
                  document: (txData.customer_cpf || "").replace(/\D/g, "") || null,
                  country: "BR",
                  ip: clientIp,
                },
                products: [
                  {
                    id: "livro-falante",
                    name: "Livro Falante",
                    planId: null,
                    planName: null,
                    quantity: 1,
                    priceInCents: amountCents,
                  },
                ],
                trackingParameters: {
                  src: null,
                  sck: null,
                  utm_source: null,
                  utm_campaign: null,
                  utm_medium: null,
                  utm_content: null,
                  utm_term: null,
                },
                commission: {
                  totalPriceInCents: amountCents,
                  gatewayFeeInCents: 0,
                  userCommissionInCents: amountCents,
                },
                isTest: false,
              }),
            });
            const utmBody = await utmResp.text();
            if (!utmResp.ok) console.error("[Utmify] Resposta de erro:", utmResp.status, utmBody);
            else console.log("[Utmify] Venda notificada com sucesso:", transactionId);
          } catch (e) {
            console.error("[Utmify] Falha ao notificar venda:", e);
          }
        }
      }
    } else {
      await supabase
        .from("transactions")
        .update({ status, paid_at: null })
        .eq("transaction_id", transactionId);
    }
  } catch (_) {}

  return jsonResponse(200, {
    success: true,
    transactionId,
    status,
    paid,
    paidAt,
  });
};
