let mongoose = require('mongoose');
let Plan = require("./plan");

let userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,

});

module.exports = mongoose.model("User", userSchema);