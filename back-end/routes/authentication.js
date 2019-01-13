const User = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7;
    return jwt.sign(user, config.authenticate.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register(req, res) {
        try {
            let user = await new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                plans: []
            });
            user.password = user.generateHash(user.password);
            user.save();
            console.log(user.password);
            // res.send(user.toJSON());
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
            }, (err, user) => {
                if (!user.validPassword(req.body.password)) {
                    return res.status(403).send({
                        error: "Incorrect login information (password)",
                    });
                }
            });

            if (!user) {
                return res.status(403).send({
                    error: "Incorrect login information",
                });
            };

            // const isPasswordValid = password === user.password;

            // if (!isPasswordValid) {
            //     return res.status(403).send({
            //         error: "Incorrect login information",
            //     });
            // };

            const userJson = user.toJSON();
            console.log(userJson);
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })

        } catch (err) {
            res.status(500).send({
                error: "An error has occured while trying to login",
            });
        }
    },
}