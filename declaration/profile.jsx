const getUserProfile = require("../backend/userProfile.js")
const { readDatabase } = require("../backend/database.js")
const anu = readDatabase()

module.exports = (req, res) => {
  const userProfile = getUserProfile(req.session.email)
  if (userProfile) {
    res.json({
      userProfile,
      totalUsers: Object.keys(anu.users).length
    })
  } else {
    res.status(404).json({
      error: "Lu Aja Belum Login Jir"
    })
  }
}