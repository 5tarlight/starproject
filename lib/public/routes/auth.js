const SLog = require('../../slog')
const session = require('./session')
const main = require('../../socket/main')

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

  if(username == undefined || username == null || passowrd == undefined) {
    res.redirect('/auth')
    return
  }
}