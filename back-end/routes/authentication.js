const User = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7;
    return jwt.sign(user, config.authentication.jwtSecret, {
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

            const userJson = user.toJSON();
            console.log(userJson);
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            });

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

            console.log("email:", email, "password:", password);

            const user = await User.findOne({
                email: email
            });

            if (!user) {
                return res.status(403).send({
                    error: "Incorrect login information",
                });
            }
            else if (!user.validPassword(password)) {
                return res.status(403).send({
                    error: "Incorrect login information (password)",
                });
            }

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