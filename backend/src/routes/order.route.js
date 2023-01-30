const route = require('express').Router();
const{
    createOrder,
    getOrder
} = require('../controllers/order.controller')

const {
    redisMiddleware
} = require('../middlewares/redis.middlewares');

route.post('/orders',createOrder)
route.get('/orders/:id',redisMiddleware,getOrder)

module.exports = route;