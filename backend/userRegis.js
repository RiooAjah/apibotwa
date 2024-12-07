const { readDatabase, writeDatabase } = require("./database.js")

function registerUser(username, email, password) {
    const db = readDatabase()
    if (!Array.isArray(db.users)) {
        db.users = []
    }
    const userExists = db.users.some(user => user.email === email)

    if (userExists) {
        return { success: false, message: "Uwogh~~ maybe the email is already in the database" }
    }

    db.users.push({ username, email, password })
    writeDatabase(db)

    return { success: true, message: "yipyy~ registration successful!!" }
}

module.exports = registerUser