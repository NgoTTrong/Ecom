const {
    addToCart,
    getCart,
    removeToCart
} = require('../services/cart.service')
const {
    setRedis
} = require('../services/redis.service');

module.exports = {
    addToCart: async (req,res) => {
        try{
            const {
                product
            } = req.body;
            console.log(product);
            res.json(await addToCart(product))
        } catch(e) {
            console.log(e)   
        }
    },
    removeToCart: async (req,res) => {
        try{
            const {
                product
            } = req.body;
            res.json(await removeToCart(product))
        } catch(e) {
            console.log(e)   
        }
    },
    getCart: async (req,res) => {
        try{
            const cartId = req.params.id;
            let rs = await getCart(cartId);
            await setRedis(cartId,rs);
            res.json(rs)
        } catch(e) {
            console.log(e)  
        }
    }
}