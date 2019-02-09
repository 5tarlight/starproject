module.exports.create = (length) => {
  let a = 'ABCDEFGHIJKLNMOPQRSTUVWXYZ0123456789abcdefghijklnmopqrstuvwxyz'
  let gen = ''
  for (let i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * (a.length - 1 - 0 + 1)) + 0
    gen += a[random]
  }
  return gen
}