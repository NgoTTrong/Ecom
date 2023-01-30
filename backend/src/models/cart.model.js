const {Schema, model} = require('mongoose')

const cartSchema = new Schema({
    userId: String,
    cartId: String,
    products: {type: Array, default:[]}
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
    collection: "carts"
})

module.exports = model('carts',cartSchema);