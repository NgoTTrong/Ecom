const _User = require('../models/user.model')

module.exports = {
    registerUser: async (user) =>{
        let checker = await _User.findOne({userId:user.userId});
        if (!checker){
            return {
                code:200,
                message : await _User.create(user)
            }
        }else{
            return{
                code: 500,
                message: "User is existed"
            }
        }
    }
}