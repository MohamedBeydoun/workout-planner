const Plan = require("../models/plan");
const User = require("../models/user");

module.exports = {
    async newPlan(req, res) {
        try {
            let name = req.body.name;
            let target = req.body.target;
            let difficulty = req.body.difficulty;
            let days = req.body.days;
            let username = req.body.username;

            console.log(username);
            console.log(days);

            const user = await User.findOne({
                username: username,
            });

            if (!user) {
                return res.status(403).send({
                    error: "Not logged in",
                });
            }

            res.send({
                message: "it works"
            })
        } catch (err) {
            res.status(400).send({
                error: "This username or email is already in use",
            });
        }
    }
}