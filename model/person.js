const mongoose = require('mongoose');

// creating schema for collection citizen
const personSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        enum: ['manager','assi_manager','cleark'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    address:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
});

// creating a person model 
const personModel = mongoose.model('citizen',personSchema);

// exporting the model
module.exports = personModel;