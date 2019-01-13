const User = require("../models/user");

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
                error: "This email account is already in use",
            });
        }
    }
}