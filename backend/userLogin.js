const path = require("path")
const { readDatabase, writeDatabase } = require("./database.js")
const { writeApiKeys, generateRandomString } = require("./key.js")
const apiKeysPath = path.resolve(__dirname, "../declaration/arrayKey.jsx")

function loginUser(email, password) {
    const db = readDatabase()
    const user = db.users.find(user => user.email === email && user.password === password)

    if (user) {
        if (!user.authKey) {
            const authKey = generateRandomString()
            user.authKey = authKey
            writeDatabase(db)
            delete require.cache[require.resolve(apiKeysPath)]
            let apiKeys = require(apiKeysPath)

            apiKeys.push(authKey)
            writeApiKeys(apiKeys)
        }

        return { success: true, message: "Login sukses!", authKey: user.authKey }
    } else {
        return { success: false, message: "Email or password invalid." }
    }
}

module.exports = loginUser