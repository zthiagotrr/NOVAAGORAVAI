require("dotenv").config({ path: ".env.local" });
require("dotenv").config({ path: ".env", override: false });
const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Adapts Netlify Function handler signature to Express
function netlifyAdapter(handler) {
  return async (req, res) => {
    const rawBody =
      req.body && typeof req.body === "object"
        ? JSON.stringify(req.body)
        : req.body || null;

    const event = {
      httpMethod: req.method,
      path: req.path,
      queryStringParameters: req.query || {},
      headers: req.headers || {},
      body: rawBody,
    };

    try {
      const result = await handler(event);
      if (result.headers) {
        Object.entries(result.headers).forEach(([k, v]) => res.setHeader(k, v));
      }
      res.status(result.statusCode).send(result.body);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
}

// API routes (same paths the frontend expects)
const pix = require("./functions/pix");
const checkPayment = require("./functions/check-payment");
const notifyApproved = require("./functions/notify-approved");
const comprovanteUpload = require("./functions/comprovantes-upload");
const logAccess = require("./functions/log-access");
const consulta = require("./functions/consulta");

app.all("/api/pix", netlifyAdapter(pix.handler));
app.all("/api/check-payment", netlifyAdapter(checkPayment.handler));
app.all("/api/notify-approved", netlifyAdapter(notifyApproved.handler));
app.all("/api/comprovantes/upload.php", netlifyAdapter(comprovanteUpload.handler));
app.all("/api/log-access", netlifyAdapter(logAccess.handler));
app.all("/api/consulta.php", netlifyAdapter(consulta.handler));

// Serve static files (HTML, CSS, JS, fonts, img etc.)
app.use(express.static(path.join(__dirname)));

// SPA fallback — all unknown routes return index.html
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
