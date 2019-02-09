const SLog = require('../../slog')
const session = require('./session')

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