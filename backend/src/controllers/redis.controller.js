const{
    setRedis,
    getRedis
} = require('../services/redis.service');

module.exports = {
    setRedis: async (req,res) => {
        try{
            const {
                key,
                payload
            } = req.body;
            return res.json({
                data: await setRedis(key, JSON.stringify(payload))
            })
        }catch(error){
            console.log(error);
        }
    },
    getRedis: async (req,res) => {
        try{
            const {
                key
            } = req.body;
            return res.json({data:JSON.parse(await getRedis(key))})
        }catch(error){
            console.log(error);
        }
    }
}