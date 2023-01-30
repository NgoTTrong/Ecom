const route = require('express').Router();

route.get('/checkstatus',(req,res,next)=>{
    res.status(200).json({
        status:'success',
        message:'api oke'   
    })
})
const{
    registerUser
} = require('../controllers/user.controller')
route.put('/users',registerUser)
const{
    setRedis,
    getRedis
} = require('../controllers/redis.controller')
route.put('/setPromise',setRedis)
route.put('/getPromise',getRedis)
module.exports = route;