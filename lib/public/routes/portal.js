const SLog = require('../../slog')

module.exports.portal = (req, res) => {
  req.app.render('portal', (err, html) => {
    if(err) {
      SLog.err(err.stack)
      process.exit(0)
    }
    SLog.info(req.ip + ' : portal')
    res.end(html)
  })
}