const express = require('express')
const http = require('http')
const som = require('./lib/socket/main')
const cookie = require('cookie-parser')
const session = require('express-session')
const eeh = require('express-error-handler')
const path = require('path')
const loader = require('./lib/public/routes/loader')
const parser = require('body-parser')

const app = express()

app.set('port', 80)
app.set('views', __dirname + '/lib/public/routes/views')
app.set('view engine', 'pug')

app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())
app.use(cookie())
app.use(session({
  secret: 'my key',
  resave: true,
  saveUninitialized: true
}))
app.use('/public', express.static(path.join(__dirname, 'public')));

loader.init(app, express.Router())

const eh = eeh({
  static: {
    '404': './public/404.html'
  }
})

app.use(eeh.httpError(404))
app.use(eh)

som.init(http.createServer(app).listen(app.get('port'), () => {
  console.log("Server Ready")
}))