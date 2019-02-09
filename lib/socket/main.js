const SLog = require('../slog')

let io

module.exports.init = (server) => {
  io = require('socket.io')(server)
}

module.exports.get = () => io