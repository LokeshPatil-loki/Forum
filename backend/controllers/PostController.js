const PostModel = require("../models/PostModel");
const UserModel = require("../models/UserModel");
const mongoose = require("mongoose")
// CREATE a post
const createPost = async (req,res) => {
    console.log(req.body);
    try{
        const Post = await PostModel.create(req.body);
        res.status(200).json(Post);
    }catch(error){
        res.status(400).json({error:error.message});
    }
}

// GET all posts
const getAllPosts = async (req,res) => {
    try{
        const Posts = await PostModel.find().sort({createdAt: -1});
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
}

const getAllPostsOfUser = async (req,res) => {
    const {id} = req.params;
    try {
        if(!mongoose.isValidObjectId(id)){
            throw "";
        }
        const Posts = await PostModel.find({"User":id}).sort({createdAt: -1});
        console.log(id);
        const User = await UserModel.findById(Posts[0].User);

        const newPosts = [];
        for(let i=0;i<Posts.length;i++){
            Posts[i]._doc["User"] = User;
            // console.log(User);
            newPosts.push(Posts[i]._doc);
        }
        console.log(newPosts);
        res.status(200).json(newPosts);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

module.exports = {
    createPost,
    getAllPosts,
    getAllPostsOfUser
}