require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/UserModel");
const PostRoute = require("./routes/PostRoute.js");
const cors = require("cors");

app.use(express.json());

app.use(cors());

app.post("/user/", async (req,res) => {
    try{
        const User = await UserModel.create(req.body);
        res.status(200).json(User);
    }catch(error){
        res.status(400).json({error:error.message});
    }
});

app.use("/posts",PostRoute);



mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(process.env.PORT,()=>{
        console.log("Server started at " + process.env.PORT)
    })
});