const SLog = require('../../slog')
const session = require('./session')

module.exports.portal = (req, res) => {
  let username = session.getUsername(req, res)
  SLog.info(req.ip + ' : ' + username + ' : portal')

  req.app.render('portal', (err, html) => {
    if(err) {
      SLog.err(err.stack)
      process.exit(0)
    }
    
    res.end(html)
  })
}