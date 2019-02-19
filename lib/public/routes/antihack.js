const session = require('./session')
const SLog = require('../../slog')

module.exports.join = (req, res) => {
  let username = session.getUsername(req, res)
  SLog.info(req.ip + ' : ' + username + ' : antihack')

  req.app.render('antiauto', (err, html) => {
    if (err) {
      SLog.err(err.stack)
      process.exit(0)
    }

    res.end(html)
  })
}
