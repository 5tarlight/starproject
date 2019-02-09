const SLog = require('../../slog')
const session = require('./session')

module.exports.portal = (req, res) => {
  let username = session.getUsername()

  req.app.render('portal', (err, html) => {
    if(err) {
      SLog.err(err.stack)
      process.exit(0)
    }
    SLog.info(req.ip + ' : ' + username + ' : ' + portal)
    res.end(html)
  })
}