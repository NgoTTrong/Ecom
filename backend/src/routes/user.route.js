const route = require('express').Router();
const{
    registerUser
} = require('../controllers/user.controller')

route.post('/users',registerUser)
module.exports = route;