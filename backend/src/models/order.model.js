const {Schema, model} = require('mongoose')

const orderSchema = new Schema({
    cartId: String,
    userId: String,
    orderId: String,
    shipping: Object,
    payment: Object, 
    products: {type:Array, default: []},
    /*
        [
            {
                productId: ...,
                quantity:...,
            }
        ]
    */
},{
    timestamps: true,
    collection: "orders"
})

module.exports = model('orders',orderSchema);