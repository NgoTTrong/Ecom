const route = require('express').Router();
const{
    getProduct,
    addProduct,
    getProducts
} = require('../controllers/product.controller');

const {
    redisMiddleware
} = require('../middlewares/redis.middlewares');

route.get('/products/:id',redisMiddleware,getProduct)
route.get('/products/get/:id',redisMiddleware,getProducts)
route.post('/products',addProduct)

module.exports = route;