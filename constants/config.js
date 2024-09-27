const dotenv = require('dotenv');
dotenv.config()

/*
* Lấy được các biến môi trường
* từ file .env
*/

module.exports = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT || 9000,
    MONGODB_URL: process.env.MONGODB_URL,
};
