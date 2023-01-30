const {Schema, model} = require('mongoose')

const inventorySchema = new Schema({
    inventoryId: String,
    productId: String,
    quantity: Number,
    reservations: {type:Array,default:[]},
    /*
        [
            {
                userId: ...,
                quantity:...,
            }
        ]
    */
},{
    timestamps: true,
    collection: "inventories"
})

module.exports = model('inventories',inventorySchema);