const gen = require('../../gen')

module.exports.getUsername = (req, res) => {
  if(req.session == undefined || req.session == null) {
    req.session = {}
  }

  if(req.session.username == undefined || req.session.username == null) {
    req.session.username = gen.create(20)
    return req.session.username
  } else {
    return req.session.username
  }
}