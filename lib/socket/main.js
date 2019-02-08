const SLog = require('../slog')

module.exports.init = (server) => {
  const io = require('socket.io')(server)

  io.on('connection', (socket) => {
    console.log('client connected')

    socket.on('msg', (data) => {
      SLog.info('message : ' + data.msg)
    })
  })
}