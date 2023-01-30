const {
    getProduct,
    addProduct,
    getProducts
} = require('../services/product.service')
const {
    setRedis
} = require('../services/redis.service');
module.exports = {
    getProduct: async (req,res) => {
        try{
            const productId = req.params.id;
            let rs = await getProduct(productId);
            await setRedis(productId,rs);
            res.json(rs)
        }catch(err){
            console.log(err);
        }
    },
    getProducts: async(req,res)=>{
        try{
            const page = req.params.id;
            let rs = await getProducts(page.split("_")[1]);
            await setRedis(page,rs);
            res.json(rs)
        }catch(err){
            console.log(err);
        }
    },
    addProduct: async (req,res)=>{
        try{
            const {
                product
            } = req.body;
            res.json(await addProduct(product));
        }catch(err){
            console.log(err);
        }
    }
}