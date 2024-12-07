const loginUser = require("../backend/userLogin.js")

module.exports = (req, res) => {
  const { email, password } = req.body
  const result = loginUser(email, password)
  if (result.success) {
    req.session.email = email
    res.json({
      success: true, message: "Login sukses!"
    })
  } else {
    res.json(result)
  }
}