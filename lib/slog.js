const colors = require('colors')
const fs = require('fs')

const mod = {}

function write(message) {
  let date = new Date()
  fs.writeFileSync(__dirname + '/log/' + date.getFullYear() + '_' + (date.getMonth() + 1) + '_' + date.getDate() + '.log', message)
}

mod.info = (message) => {
  console.log(message.white)
  write(message)
}

mod.warn = (message) => {
  console.log(message.orange)
  write(message)
}

mod.err = (message) => {
  console.log(message.red)
  write(message)
}

module.exports = mod