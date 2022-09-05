const express = require("express");
const router = express.Router();
const PostModel = require("../models/PostModel");
const UserModel = require("../models/UserModel");


router.post("/", async (req,res) => {
    console.log(req.body);
    try{
        const Post = await PostModel.create(req.body);
        res.status(200).json(Post);
    }catch(error){
        res.status(400).json({error:error.message});
    }
});

// Get all post at once
router.get("/", async (req,res) => {
    try{
        const Posts = await PostModel.find();
        const newPosts = [];
        for(let i=0;i<Posts.length;i++){
            const User = await UserModel.findById(Posts[i].User);
            Posts[i]._doc["User"] = User;
            // console.log(User);
            newPosts.push(Posts[i]._doc);
        }
        console.log(newPosts);
        res.status(200).json(newPosts);
    }catch(error){
        res.status(400).json({error:error.message});
    }
});


module.exports = router;