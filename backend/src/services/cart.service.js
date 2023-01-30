const _Cart = require('../models/cart.model');
const _Inventory = require('../models/inventory.model');


module.exports = {
    addToCart: async ({
        productId,
        userId,
        cartId,
        inventoryId,
        quantity
    }) => {
        try{
            //step1: check inventory is ready
            // step2: add to cart
            const checker = await _Inventory.updateOne({
                inventoryId,
                productId,
                quantity: {$gte: quantity}
            },{
                $inc:{
                    quantity: -quantity
                },
                $push:{
                    reservations: {
                        userId: userId,
                        quantity: quantity
                    }
                }
            })
            if (checker.modifiedCount){
                const cart = await _Cart.findOneAndUpdate({
                    userId,
                    cartId,
                },{
                    $push:{
                        products: {
                            productId,
                            quantity,
                            inventoryId
                        }
                    }
                },{
                    upsert: true,
                    returnNewDocument: true
                })
                return {
                    code: 200,
                    message: cart
                }
            }else{
                return {
                    code: 500,
                    message: "Quantity is not enough"
                }
            }
        } catch(e) {
            console.log(e)
        }
    },
    removeToCart: async ({userId,productId,cartId,inventoryId,quantity}) => {
        try{
            const cart = await _Cart.findOne({
                userId,
                cartId,
            })
            let rs = cart.products.filter(product => product.productId != productId && product.inventoryId != inventoryId && product.quantity != quantity)
            cart.products = rs
            await cart.save();
            let result = await _Inventory.findOne({
                inventoryId,
                productId
            })
            if (result.reservations.length != 0){
                result.quantity+=quantity;
            }
            let index = -1;
            for (let i = 0; i < result.reservations.length; i++){
                if (result.reservations[i].quantity == quantity && result.reservations[i].userId == userId){
                    index = i;
                    break;
                }
            }
            if (index != -1){
                result.reservations.splice(index,1);
            }
            result.save();
            return{
                code: 200,
                message: result
            }
        } 
        catch(e) {
            console.log(e)
        }
    },
    getCart : async (cartId) =>{
        try{
            return {
                code: 200,
                message: await _Cart.findOne({cartId: cartId})
            }
        } catch(e) {
            console.log(e)
        }
    }
}