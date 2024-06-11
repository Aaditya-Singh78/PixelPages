const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    id: {
        type: Number
    },
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    authorId:{
        type: Number,
    },
    createdAt:{
        type: Number,
    }
});

module.exports = mongoose.model('post',postSchema)