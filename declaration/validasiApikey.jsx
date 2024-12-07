const validApiKeys = require("./arrayKey.jsx")

function validateApiKey(req, res, next) {
  const apiKey = req.query.apiKey
  if (!apiKey || !validApiKeys.includes(apiKey)) {
    return res.status(401).json({ error: "api key not found" })
  }
  next()
}