const clientRedis = require('../database/init.redis');

module.exports = {
    setRedis: async (key,value) => {
        try{
            return new Promise((resolve, reject) => {
                clientRedis.set(key,JSON.stringify(value),(err,rs)=>{
                    console.log(rs)
                    return err? reject(err): resolve(rs)
                })
            })
        }catch(error){

        }
    },
    getRedis: async (key) => {
        try{
            return new Promise((resolve, reject) => {
                clientRedis.get(key,(err,rs)=>{
                    console.log(rs)
                    return err? reject(err): resolve(JSON.parse(rs))
                })
            })
        }catch(error){

        }

    },
}