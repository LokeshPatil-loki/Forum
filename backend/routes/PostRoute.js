const express = require("express");
const router = express.Router();
const {createPost, getAllPosts,getAllPostsOfUser} = require("../controllers/PostController.js" );


router.post("/", createPost);

// Get all post at once
router.get("/", getAllPosts);

// Get all user posts 
router.get("/:id", getAllPostsOfUser);


module.exports = router;