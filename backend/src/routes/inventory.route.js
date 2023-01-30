const route = require('express').Router();
const{
    addInventory,
    getInventory
} = require('../controllers/inventory.controller')
const {
    redisMiddleware
} = require('../middlewares/redis.middlewares');

route.post('/inventories',addInventory)
route.get('/inventories/:id',getInventory)

module.exports = route;