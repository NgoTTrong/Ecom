const { createClient } = require('redis');
const client= createClient({
    socket: {
        host: process.env.HOSTNAME,
        port: process.env.REDIS_PORT
    },
    password: process.env.PASSWORD,
    legacyMode: true
});

client.connect().catch(console.error);

client.ping(function (err, result) {
    console.log(result);
})

client.on('connect', () => {
    console.log('Redis client connected');
});

client.on("error", (error) => {
    console.error(error);
});

module.exports = client
