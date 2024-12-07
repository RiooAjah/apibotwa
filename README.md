#MUNGKIN INI ADALAH LAST UPDATE


 
# Instalasi

```js
### *Di Vps/Termux

git clone https://github.com/balxz/simple-apiBase
cd simple-apiBase 
npm i
node . 
npm start

### *Di Vercel*

1. Fork Repo
2. Login Vercel Via Akun Github Mu
3. Pilih + Dan Create New Projects
4. Click Button Deploy
> Setelah itu tunggu saja
```

# Penjelasan Fiture
```
Singkat nya kalian lebih fokus ke app.js dan folder pages/fiture aja.

cara nambahkan nya buat terlebih dahulu code di folder pages/fiture/

disitu dh ada example codenya, lalu buat lagi fungsi nya di server/app.js

contoh
app.get("/route", fungsi (req, res) {
  require("../path/file")(req, res)
})


apasih route?, route ruh kek selesai domain, contoh 
*example.com/route*
*example.com/twitdl*

apasih fungsi yg setelah route itu?
simple nya gini ("/twitdl", limit, async (req, res))

paham?
```

# Penjelasan Nguwawor ↓
```js
 /* axios guna scrap/api yang kamu tembak */

// ↓
const axios = require("axios")

/* allowedapikey ini adalah komponen untuk mengunci fitur mu */

// ↓ 
const allowedApiKeys = require("../../declaration/arrayKey.jsx")

/* dini urls adalah bagian slesh domain kamu dan ini mengandung fungsi, pastikan let urls dan req.query.urls itu sama let (urls) req.query.(urls) */

// ↓
let urls = req.query.urls

/* disini juga guna supaya berfungsi slesh apikey mu /apiKey, pastikan sama ya let (apiKey) req.query.(apiKey) besar kecilnya harus sama. */

// ↓
const apiKey = req.query.apiKey

/* ini buat pas user ga input req query itu, pastikan if urls itu harus sama kek di atas let urls itu**/

// ↓
if (!urls) {
    return res.status(400).json({
      error: "Url Tiktok Nya Mana?"
    })
  }
  
  
/* ini juga fungsinya sama kek di atas, dan yg di if nya itu harus sama dengan req.query di atas*/

// ↓
if (!apiKey || !allowedApiKeys.includes(apiKey)) {
    return res.status(403).json({
      error: "Input Parameter Apikey !"
    })
  }
  
/* disini kita make try ya buat debuging */

// ↓
try {
    // letak code tembak api atau scraper scraper anda
    // something...
} catch(e) {
    return res.status(500).json({
    error: "Ada masalah, coba lagi nanti"
    })
}
