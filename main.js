const express = require('express')
const http = require('http')
const som = require('./lib/socket/main')
const cookie = require('cookie-parser')
const session = require('express-session')
const eeh = require('express-error-handler')
const path = require('path')

const app = express()

app.set('port', 80)

app.use(cookie())
app.use(session({
  secret: 'my key',
  resave: true,
  saveUninitialized: true
}))
app.use('/public', express.static(path.join(__dirname, 'public')));

const eh = eeh({
  static: {
    '404': './public/404.html'
  }
})

app.use(eeh.httpError(404))
app.use(eh)

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/lib/public/index.html');
});

som.init(http.createServer(app).listen(app.get('port'), () => {
  console.log("Server Ready")
}))