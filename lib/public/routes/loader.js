const routes = require('./routes')
const SLog = require('../../slog')
const express = require('express')

module.exports.init = (app) => {
  const router = express.Router()

  for(let cor in routes) {
    const route = require(routes[cor].path)[routes[cor].method]

    if(routes[cor].type == 'get') {
      router.route(routes[cor].url).get(route)
      SLog.comp('[' + routes[cor].url + '] [' + routes[cor].type + '] 라우팅 경로 추가됨')
    } else{
      router.route(routes[cor].url).post(route)
      SLog.comp('[' + routes[cor].url + '] [' + routes[cor].type + '] 라우팅 경로 추가됨')
    }
  }

  app.use(router)
}