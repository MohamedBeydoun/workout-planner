let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    plans: [
        //add plan objects -- lookup how to
    ]
});

module.exports = mongoose.model("User", userSchema);