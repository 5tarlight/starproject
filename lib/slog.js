const colors = require('colors')
const fs = require('fs')

const mod = {}

function write(message) {
  let date = new Date()
  fs.writeFileSync(__dirname + '/log/' + date.getFullYear() + '_' + (date.getMonth() + 1) + '_' + date.getDate() + '.log', message, {flag: 'a', encoding: 'utf-8'})
}

function timestamp() {
  let date = new Date()
  return '[' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '] '
}

mod.info = (message) => {
  console.log(timestamp() + message.white)
  write(timestamp() + message + '\n')
}

mod.warn = (message) => {
  console.log(timestamp() + message.orange)
  write(timestamp() + message + '\n')
}

mod.err = (message) => {
  console.log(timestamp() + message.red)
  write(timestamp() + message + '\n')
}

module.exports = mod