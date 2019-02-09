const SLog = require('../../slog')
const session = require('./session')
const dataconfig = require('../../config/database')
const mysql = require('mysql')

module.exports.join = (req, res) => {
  let username = session.getUsername(req, res)
  SLog.info(req.ip + ' : ' + username + ' : auth')

  req.app.render('auth', (err, html) => {
    if (err) {
      SLog.err(err.stack)
      process.exit(0)
    }

    res.end(html)
  })
}

module.exports.auth = (req, res) => {
  let username = req.body.username
  let password = req.body.password

  if(username == undefined || username == null || password == undefined || password == null) {
    res.redirect('/auth')
    return
  }

  const conn = mysql.createConnection(dataconfig)
  
  conn.connect()

  conn.query("INSERT INTO user (username, password) VALUES (?, ?)", [username, password], (err, results, fields) => {
    if(err) {
      SLog.err(err.stack)
      res.redirect('/')
      return
    }

    SLog.comp(req.ip + ' : New User')
    req.session.username = username
    res.redirect('/')
  })

  conn.end()
}