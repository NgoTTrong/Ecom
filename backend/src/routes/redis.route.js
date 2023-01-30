const route = require('express').Router();
const{
    setRedis,
    getRedis
} = require('../controllers/redis.controller')
route.put('/setPromise',setRedis)
route.put('/getPromise',getRedis)

module.exports = route;