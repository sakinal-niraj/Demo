const mongoose = require('mongoose');

// connection url
const mongoURL = 'mongodb://127.0.0.1:27017/learning';

// connection function
const connectToDataBase = ()=>{
    return mongoose.connect(
        mongoURL,
        console.log('Database is connected')
    );
}

module.exports = connectToDataBase;
