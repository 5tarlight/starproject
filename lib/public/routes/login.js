const SLog = require('../../slog')
const session = require('./session')
const dataconfig = require('../../config/database')
const mysql = require('mysql')

module.exports.join = (req, res) => {
  let username = session.getUsername(req, res)
  SLog.info(req.ip + ' : ' + username + ' : login_portal')

  req.app.render('login', (err, html) => {
    if (err) {
      SLog.err(err.stack)
      process.exit(0)
    }

    res.end(html)
  })
}

module.exports.login = (req, res) => {
  let username = req.body.username
  let password = req.body.password

  if (username == undefined || username == null || password == undefined || password == null) {
    res.redirect('/login')
    return
  }

  const conn = mysql.createConnection(dataconfig)

  conn.connect()

  conn.query("SELECT * FROM user WHERE username=? AND password=?", [username, password], (err, results, fields) => {
    if (err) {
      SLog.err(err.stack)
      res.redirect('/')
      return
    }
    
    if(results.length > 0) {
      SLog.comp(req.ip + ' : login')
      req.session.username = username
      res.redirect('/')
      return
    }
    releaseEvents.redirect('/login')
  })

  conn.end()
}