const _Inventory = require('../models/inventory.model');

module.exports = {
    addInventory: async (inventory) => {
        try{
            return {
                code:200,
                message: await _Inventory.create(inventory)
            }
        }catch(err){
            console.log(err);
        }
    },
    getInventory: async (inventoryId) => {
        try{
            return {
                code:200,
                message: await _Inventory.findOne({inventoryId: inventoryId})
            }
        }catch(err){
            console.log(err);
        }
    }
}