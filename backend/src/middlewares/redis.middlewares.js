const {
    getRedis
} = require('../services/redis.service')

module.exports = {
    redisMiddleware: async (req,res,next) => {
        try{
            const key = req.params.id;
            const rs = await getRedis(key);
            if (rs){
                res.json({...rs});
            }else{
                next();
            }
        } catch(e) {
            console.log(e);
        }
    }
}