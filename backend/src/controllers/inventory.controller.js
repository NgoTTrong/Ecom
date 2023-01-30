const {
    addInventory,
    getInventory
} = require('../services/inventory.service')
const {
    setRedis
} = require('../services/redis.service');
module.exports = {
    addInventory: async (req,res) => {
        try{
            const {
                inventory
            } = req.body;
            res.json(await addInventory(inventory));
        } catch(e) {
            console.log(e);
        }
    },
    getInventory: async (req,res) => {
        try{
            const inventoryId = req.params.id;
            let rs = await getInventory(inventoryId);
            await setRedis(inventoryId,rs);
            res.json(rs)
        } catch(e) {
            console.log(e);   
        }
    }
}