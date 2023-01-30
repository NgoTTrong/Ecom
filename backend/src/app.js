const express = require('express');
const cors = require('cors');
const app = express();
//init DB
require('./database/init.mongodb')
require('./database/init.redis');

app.use(cors());

//add body parser
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use(require('./routes/test.route'));

app.use(require('./routes/product.route'));
app.use(require('./routes/user.route'));
app.use(require('./routes/redis.route'));
app.use(require('./routes/inventory.route'))
app.use(require('./routes/cart.route'))
app.use(require('./routes/order.route'))



module.exports = app;