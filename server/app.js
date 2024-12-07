/*
   * by balzz
   * dont delete my wm
   * follow more instagram: @iqstore78
*/

const express = require("express")
const axios = require("axios")
const session = require("express-session")
const path = require("path")
const bodyParser = require('body-parser')
const { limit, checkBanned } = require("../declaration/rateLimit.jsx")
const isAuthenticated = require("../declaration/autentikasi.jsx")
const allowedApiKeys = require("../declaration/arrayKey.jsx")

const app = express()
app.use(checkBanned)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
    secret: 'komtolllll',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3600000 } 
}))

async function gptturbo(message) {
    try {
        const { data  } = await axios.get(`https://hercai.onrender.com/turbo/hercai?question=${encodeURIComponent(message)}`, {
            headers: {
                "content-type": "application/json",
            },
        })
        return data;
    } catch (e) {
    console.log(e)
}
}
// Api
app.get('/api/gptturbo', async (req, res) => {
  try {
    const message = req.query.message;
    const apiKey = req.query.apiKey;
    if (!message) {
      return res.status(400).json({ error: 'Parameter "message" tidak ditemukan' });
    }
    if (!apiKey) {
    return res.status(403).json({
      error: "Input Parameter Apikey!"
    })
  } else if (!allowedApiKeys.includes(apiKey)) {
    return res.status(403).json({
      error: "apikey not found"
    })
  }
    const response = await gptturbo(message);
    res.status(200).json({
      status: 200,      
      data: { response },
      creator: "Apibotwa"
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
/* !=== PAGE ===! */
app.get("/", limit, (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/home.html"))
})

app.get("/login", limit, (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/login.html"))
})

app.get("/profile", limit, isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/profile.html"))
})
app.get("/docs", limit, isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/docs.html"))
})
/* = ENDPOINT FITURE = */
app.post('/register', (req, res) => {
    require("../declaration/register.jsx")(req, res)
})

app.post('/login', (req, res) => {
    require("../declaration/login.jsx")(req, res)
})

app.get("/logout", (req, res) => {
    require("../declaration/logout.jsx")(req, res)
})

app.get("/prof", isAuthenticated, (req, res) => {
    require("../declaration/profile.jsx")(req, res)
})

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "../pages/404.html"))
})

module.exports = app
