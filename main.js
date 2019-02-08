const express = require('express')
const http = require('http')
const som = require('./lib/socket/main')

const app = express()

app.set('port', 80)

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/lib/public/index.html');
});

som.init(http.createServer(app).listen(app.get('port'), () => {
  console.log("Server Ready")
}))