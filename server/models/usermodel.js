const mongoose =require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        unique:true
    },
    email: {
        type: String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true,
        minLength:5
    }
},{ versionKey:false});

const user = mongoose.model("user",userSchema);
module.exports = user;