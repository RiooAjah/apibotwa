const registerUser = require("../backend/userRegis.js")

module.exports = (req, res) => {
  const { username, email, password } = req.body
  const result = registerUser(username, email, password)
  res.json(result)
}