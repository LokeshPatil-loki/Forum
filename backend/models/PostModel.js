const mongoose = require("mongoose");

const PostModel = new mongoose.Schema({
    Content:{
        type:String,
        required:true
    },
    Images:[{
        type: String
    }],
    File:[{
        type: String
    }],
    User:{
        type: mongoose.Types.ObjectId,
        required: true
    }
},{timestamps:true});

module.exports = mongoose.model("Post",PostModel);