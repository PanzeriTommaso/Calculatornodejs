
const express = require('express')
const app = express()

app.get('/somma', function (req, res) {
    res.send(JSON.stringify(req.query.a - - req.query.b))
  })
app.get('/sottrazione', function (req, res) {
    res.send(JSON.stringify(req.query.a-req.query.b))
  })

app.get('/divisione', function (req, res) {
    res.send(JSON.stringify(req.query.a/req.query.b))
  })

  app.get('/moltiplicazione', function (req, res) {
    res.send(JSON.stringify(req.query.a * req.query.b))
  })

  app.listen(3000);