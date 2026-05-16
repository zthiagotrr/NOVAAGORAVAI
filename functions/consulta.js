const CPF_API_BASE = "https://magmadatahub.com/api.php";

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

function extractCpfData(payload, cpf) {
  const root = payload || {};
  const nome = root.nome || "";
  const dataNasc = root.nascimento || "";
  return {
    cpf: cpf || "",
    nome,
    nome_mae: "",
    data_nascimento: dataNasc,
    sexo: "",
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

  const cpfRaw = event.queryStringParameters?.cpf || "";
  const cpf = cpfRaw.replace(/\D/g, "").slice(0, 11);
  if (!cpf) {
    return jsonResponse(400, { status: 400, statusMsg: "Informe o CPF" });
  }

  const token = process.env.CPF_API_TOKEN;
  if (!token) {
    return jsonResponse(500, { status: 500, statusMsg: "Configure CPF_API_TOKEN nas variaveis do Netlify" });
  }
  const apiUrl = `${CPF_API_BASE}?token=${encodeURIComponent(token)}&cpf=${cpf}`;

  let apiResp;
  let text = "";
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);
    try {
      apiResp = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "Referer": "https://magmadatahub.com/",
          "Origin": "https://magmadatahub.com",
        },
        signal: controller.signal,
      });
      text = await apiResp.text();
      if (apiResp.ok) break;
    } catch (error) {
      if (attempt === 3) {
        return jsonResponse(502, { status: 502, statusMsg: "Falha ao consultar CPF", details: String(error) });
      }
    } finally {
      clearTimeout(timeout);
    }
  }
  let data = {};
  try {
    data = JSON.parse(text);
  } catch {
    data = { raw: text };
  }

  if (!apiResp || !apiResp.ok) {
    const statusMsgMap = {
      400: "Parâmetros obrigatórios ausentes",
      403: "Token inválido, plano expirado ou limite atingido",
      502: "Erro na base externa",
    };
    const msg = statusMsgMap[apiResp?.status] || `Erro na consulta: ${apiResp?.status}`;
    return jsonResponse(apiResp?.status || 502, { status: apiResp?.status, statusMsg: msg });
  }

  if (data.success === false) {
    const msg = data.erro || data.error || "CPF não encontrado";
    return jsonResponse(404, { status: 404, statusMsg: msg });
  }

  if (!data.nome) {
    return jsonResponse(404, { status: 404, statusMsg: "CPF não encontrado" });
  }

  const dados = extractCpfData(data, cpf);
  return jsonResponse(200, { DADOS: dados });
};
