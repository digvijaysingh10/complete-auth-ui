const mongoose = require('mongoose');
const { DB_URL } = require('./config');


mongoose.connect(DB_URL)
.then((result) => {
    console.info('DB connected');
}).catch((err) => {
    console.error(`DB Connection Error: ${err.message}`);
});

module.exports = mongoose;