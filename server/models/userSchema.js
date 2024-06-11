const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    id: {
        type: Number,
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

module.exports = mongoose.model('user', userSchema);
