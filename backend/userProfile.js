const { readDatabase } = require("./database.js")
function getUserProfile(email) {
    const db = readDatabase()
    const user = db.users.find(user => user.email === email)
    if (user) {
        return { username: user.username, email: user.email, authKey: user.authKey }
    } else {
        return null
    }
}
module.exports = getUserProfile