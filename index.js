/*
   * by balzz
   * dont delate my wm
   * follow more instagram: @iqstore78
*/
const app = require("./server/app")
const port = require("./declaration/port.jsx")
const conect = require("./declaration/conect.jsx")
const { readDatabase } = require("./backend/database.js")
const validasi = require("./declaration/validasiApikey.jsx")
const session = require("express-session")
const anu = readDatabase()

const kntols = `
\x1b[36m[INFO] \x1b[34mServer Is Conected...
\x1b[36m[USER] ${Object.keys(anu.users).length}
\x1b[36m[NOTE] JANGAN DIPERJUAL BELIKAN JIKA KEADAAN FITUR MASIH DEFAULT
\x1b[35m[INFO] \x1b[37mlocalhost:${port.portnya}
\x1b[35m[REPO] \x1b[37mgithub.com/balxz/simple-apiBase`

app.listen(port.portnya, () => {
  console.clear()
  setTimeout(() => { 
     console.log(kntols)
  }, 1500)
  console.log("\n")
  console.log(validasi)
  console.log("\x1b[34m" + conect.data)
})