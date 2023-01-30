const {Schema, model} = require('mongoose')

const productSchema = new Schema({
    productId: {type:String, required: true},
    name: String,
    brand: String,
    price: Number,
    url: String,
    description: String,
    realease_date: Date,
    specs: {type: Array, default: []}
},{
    timestamps: true,
    collection: "products"
})

module.exports = model('products',productSchema);