const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
    FullName:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true,
        unique: true
    },
    ProfilePicture:{
        type: String,
    }
});

module.exports = mongoose.model("User",UserModel);