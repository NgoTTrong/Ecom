const _Product = require('../models/product.model');

module.exports = {
    getProduct: async (productId) => {
        try{
            let product = await _Product.findOne({productId: productId});
            if (product){
                return {
                    code: 200,
                    message: product
                }
            }else{
                return {
                    code: 404,
                    message: "Not found that product"
                }
            }
        }catch(err){
            console.log(err);
        }
    },
    getProducts : async (page) =>{
        try{
            let products = await _Product.find().skip(2*(parseInt(page) - 1)).limit(2);
            if (products){
                return {
                    code: 200,
                    message: products
                }
            }else{
                return {
                    code: 404,
                    message: "Not found that product"
                }
            }
        } catch(e) {
            console.log(e)   
        }
    },
    addProduct: async (product) => {
        try{
            let checker = await _Product.findOne({productId: product?.productId});
            if (!checker){
                return{
                    code: 200,
                    message: await _Product.create(product)
                }
            }else{
                return{
                    code: 500,
                    message: "ProductId is existed"
                }
            }
        }catch(err){
            console.log(err);
        }
    }
}