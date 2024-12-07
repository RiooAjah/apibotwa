/*
   * by balzz
   * dont delete my wm
   * follow more instagram: @iqstore78
*/
const rateLimit = require("express-rate-limit")

let bannedIPs = []
const banDuration = 30 * 1000

const limit = rateLimit({
  windowMs: 10 * 1000, 
  max: 6,
  message: "Too Many Requests!, try again next time sensei",
  handler: (req, res) => {
    const ip = req.ip
    if (!bannedIPs.includes(ip)) {
      bannedIPs.push(ip)
      console.log(`IP ${ip} dibanned.`) 
      setTimeout(() => {
        bannedIPs = bannedIPs.filter(bannedIp => bannedIp !== ip)
        console.log(`${ip} Meakukan Flooading Request`)
      }, banDuration)
    }
    res.status(429).send("To Many Request Sensei, Try Again Next Time Sensei.")
  }
})
const checkBanned = (req, res, next) => {
  const ip = req.ip
  if (bannedIPs.includes(ip)) {
    return res.status(403).send("To Many Request Sensei, Try Again Next Time!.")
  }
  next()
}

module.exports = { limit, checkBanned }