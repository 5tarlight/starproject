module.exports = [
  {url: '/', path: './portal', method: 'portal', type: 'get'},
  {url: '/auth', path: './auth', method: 'join', type: 'get'},
  {url: '/process/auth', path: './auth', method: 'auth', type: 'post'},
  {url: '/login', path: './login', method: 'join', type: 'get'},
  {url: '/process/login', path: './login', method: 'login', type: 'post'},
  {url: '/antihack', path: './antihack', method: 'join', type: 'get'}
]