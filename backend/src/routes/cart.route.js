const route = require('express').Router();
const{
    addToCart,
    getCart,
    removeToCart
} = require('../controllers/cart.controller');
route.post('/carts',addToCart)
route.post('/carts/remove',removeToCart)
route.get('/carts/:id',getCart)
module.exports = route;