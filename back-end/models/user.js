const mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

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

userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function (password) {
    // console.log(bcrypt.compareSync(password, this.password));
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", userSchema);