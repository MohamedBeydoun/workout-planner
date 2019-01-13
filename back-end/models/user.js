let mongoose = require('mongoose');
let Plan = require("./plan");

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
    plans: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Plan"
    }]
});

module.exports = mongoose.model("User", userSchema);