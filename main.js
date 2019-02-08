const express = require('express')
const http = require('http')
const som = require('./lib/socket/main')
const cookie = require('cookie-parser')
const session = require('express-session')

const app = express()

app.set('port', 80)

app.use(cookie())
app.use(session({
  secret: 'my key',
  resave: true,
  saveUninitialized: true
}))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/lib/public/index.html');
});

som.init(http.createServer(app).listen(app.get('port'), () => {
  console.log("Server Ready")
}))