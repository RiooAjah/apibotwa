const fs = require("fs")
const path = require("path")
const Path = path.resolve(__dirname, "schema.json")

function readDatabase() {
    const data = fs.readFileSync(Path, "utf8")
    return JSON.parse(data)
}

function writeDatabase(data) {
    fs.writeFileSync(Path, JSON.stringify(data, null, 2), "utf8")
}

module.exports = { readDatabase, writeDatabase }