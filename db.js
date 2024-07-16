const mongoose = require('mongoose');
require('dotenv').config();

// connection url
// const mongoURL = 'mongodb://127.0.0.1:27017/learning';
const mongoURL = process.env.DB_URL;

// connection function
const connectToDataBase = ()=>{
    return mongoose.connect(
        mongoURL,
        console.log('Database is connected')
    );
}

module.exports = connectToDataBase;
