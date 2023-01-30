const {
    registerUser
} = require('../services/user.service');


module.exports = {
    registerUser : async(req,res)=>{
        try{
            const {
                user
            } = req.body;
            console.log(user);
            res.json(await registerUser(user));
        } catch(e) {
            console.log(e)
        }
    }
}