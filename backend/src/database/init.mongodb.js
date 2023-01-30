const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Connect to DB success');
}).catch(err => console(err))

module.exports = mongoose;
