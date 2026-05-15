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
        const utmifyToken = process.env.UTMIFY_API_TOKEN || process.env.UTMIFY_PIXEL_ID;
        if (utmifyToken) {
          const nowTs = new Date().toISOString().replace("T", " ").split(".")[0];
          const amountCents = Math.round((txData.amount || 49.90) * 100);

          // ── Facebook Conversions API ──────────────────────────────────
          const fbToken = process.env.FACEBOOK_ACCESS_TOKEN;
          const fbPixelId = process.env.FACEBOOK_PIXEL_ID || "4327697327497010";
          if (fbToken && !fbToken.startsWith("COLE_")) {
            const nameParts = (txData.customer_name || "").trim().split(/\s+/);
            const fbPayload = {
              data: [
                {
                  event_name: "Purchase",
                  event_time: Math.floor(Date.now() / 1000),
                  action_source: "website",
                  event_id: transactionId,
                  user_data: {
                    em: sha256(txData.customer_email),
                    ph: sha256("55" + (txData.customer_phone || "").replace(/\D/g, "")),
                    fn: sha256(nameParts[0]),
                    ln: sha256(nameParts.slice(1).join(" ") || nameParts[0]),
                    ge: null,
                    db: null,
                  },
                  custom_data: {
                    currency: "BRL",
                    value: txData.amount || 49.90,
                    content_ids: [transactionId],
                    content_type: "product",
                    content_name: "Livro Falante",
                  },
                },
              ],
            };

            fetch(
              `https://graph.facebook.com/v20.0/${fbPixelId}/events?access_token=${fbToken}`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(fbPayload),
              }
            )
              .then(async (r) => {
                const body = await r.text();
                if (!r.ok) console.error("[Facebook CAPI] Erro:", r.status, body);
                else console.log("[Facebook CAPI] Conversão enviada:", transactionId);
              })
              .catch((e) => console.error("[Facebook CAPI] Falha:", e));
          }

          // ── Utmify Orders API ─────────────────────────────────────────
          fetch("https://api.utmify.com.br/api-credentials/orders", {
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
                ip: null,
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
          })
            .then(async (r) => {
              const body = await r.text();
              if (!r.ok) console.error("[Utmify] Resposta de erro:", r.status, body);
              else console.log("[Utmify] Venda notificada com sucesso:", transactionId);
            })
            .catch((e) => console.error("[Utmify] Falha ao notificar venda:", e));
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
