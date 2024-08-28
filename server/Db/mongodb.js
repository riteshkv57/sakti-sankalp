const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const connectmongo = async ()=>{
    try{
        const connectdb=await mongoose.connect(`${process.env.MONGOURI}`);
        console.log("\n Mongodb connection successful");
    }
    catch(error){
        console.log("Mongodbconnection failed");
    }
}

module.exports= connectmongo