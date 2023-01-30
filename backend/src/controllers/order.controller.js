const {
    createOrder,
    getOrder
} = require('../services/order.service')
const {
    setRedis
} = require('../services/redis.service');
module.exports = {
    createOrder: async (req,res) => {
        try{
            const {
                order
            } = req.body;
            res.json(await createOrder(order));
        } catch(e) {
            console.log(e);
        }
    },
    getOrder: async (req,res) => {
        try{
            const orderId = req.params.id;
            let rs = await getOrder(orderId);
            await setRedis(orderId,rs);
            res.json(rs)
        } catch(e) {
            console.log(e);   
        }
    }
}