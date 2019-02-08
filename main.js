const express = require('express')
const http = require('http')
const SLog = require('./lib/slog')

const app = express()

app.set('port', 80)

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/lib/public/index.html');
});

const server = http.createServer(app).listen(app.get('port'), () => {
  console.log("Server Ready")
})

const io = require('socket.io')(server)

io.on('connection', (socket) => {
  console.log('client connected')
  
  socket.on('msg', (data) => {
    SLog.err('message : ' + data.msg)
  })
})