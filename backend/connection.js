const mongoose = require('mongoose');
const { DB_URL } = require('./config');


mongoose.connect(DB_URL)
.then((result) => {
    console.info('DB connected');
}).catch((err) => {
    console.error('Errorin connecting to DB', err);
});

module.exports = mongoose;