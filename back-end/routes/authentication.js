const User = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7;
}

module.exports = {
    async register(req, res) {
        try {
            const user = await User.create({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                plans: []
            });
            res.send(user.toJSON());
        } catch (err) {
            res.status(400).send({
                error: "This username or email is already in use",
            });
        }
    },
    async login(req, res) {
        try {
            const email = req.body.email;
            const password = req.body.password;

            const user = await User.findOne({
                email: email
            });

            console.log("user", user.toJSON())

            if (!user) {
                return res.status(403).send({
                    error: "Incorrect login information",
                });
            };

            const isPasswordValid = password === user.password;

            console.log(isPasswordValid);

            if (!isPasswordValid) {
                return res.status(403).send({
                    error: "Incorrect login information",
                });
            };

            console.log(userJSON);

            const userJSON = user.toJSON();
            res.send({
                user: userJSON,
            })
        } catch (err) {
            res.status(500).send({
                error: "An error has occured while trying to login",
            });
        }
    },
}