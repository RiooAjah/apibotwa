/*
   * by balzz
   * dont delate my wm
   * follow more instagram: @iqstore78
*/
const port = require("./port.jsx")
const cmdStart = require("./cmdData.jsx")

const conect = {
  data: `{
     status: 200,
     cmdRun: ${cmdStart.cmd},
     message: "Server berjalan di port ${port.portnya}"
}`
}
module.exports = conect