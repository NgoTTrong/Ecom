const _Order = require('../models/order.model');

module.exports = {
    createOrder: async (order) => {
        try{
            return{
                code: 200,
                message: await _Order.create(order)
            }
        } catch(e) {
            console.log(e)   
        }
    },
    getOrder: async (orderId) => {
        try{
            return{
                code:200,
                message: await _Order.findOne({orderId: orderId})
            }
        } catch(e) {
            console.log(e);   
        }
    }
}