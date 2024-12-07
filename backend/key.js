const path = require("path")
const fs = require("fs")
const apiKeysPath = path.resolve(__dirname, "../declaration/arrayKey.jsx")

function writeApiKeys(apiKeys) {
    fs.writeFileSync(apiKeysPath, `module.exports = ${JSON.stringify(apiKeys, null, 2)}`, "utf8")
}

function generateRandomString(length = 6) {
    let anu = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    const anuLength = anu.length
    for (let i = 0; i < length; i++) {
    result += anu.charAt(Math.floor(Math.random() * anuLength))
   }
    return result
}

module.exports = { writeApiKeys, generateRandomString }