const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectmongo = require("./Db/mongodb.js"); // Use require
const router = require("./Routers/routes.js")
const dotenv = require("dotenv");
dotenv.config()
const PORT=process.env.PORT || 8000

const app = express()
app .use(express.json())
app.use(cors())
app.use('/auth',router)

app.get("/", (req, res) => {
    res.send("Server is running");
});


connectmongo()
.then(()=>{
    app.listen(PORT,() =>{
        console.log(`Server is listening on port ${PORT}`);   
    });
})
.catch((error)=>{
    console.log("server connection failed",error);
})