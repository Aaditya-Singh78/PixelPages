const mongoose = require("mongoose");
const { writerId } = require("../private/config");

const userSchema = mongoose.Schema({
    id: {
        type: String,
        default: writerId,
        unique: true,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});


const postSchema = mongoose.Schema({
    id: {
        type: String,
        default: writerId,
        unique: true,
        required: true
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
        type: mongoose.Schema.Types.String,
        ref: 'user',
        required: true
    },
    createdAt:{
        type:  Date,
        default: Date.now
    }
});

module.exports = mongoose.model('post',postSchema);
module.exports = mongoose.model('user', userSchema);