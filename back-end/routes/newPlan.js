const Plan = require("../models/plan");
const User = require("../models/user");

module.exports = {
    async newPlan(req, res) {
        try {
            // let name = req.body.name;
            // let target = req.body.target;
            // let difficulty = req.body.difficulty;
            // let days = req.body.days;
            let username = req.body.username;

            // console.log(username);
            // console.log(days);

            const user = await User.findOne({
                username: username,
            });

            // console.log(user);

            //check if user is registered
            if (!user) {
                return res.status(403).send({
                    error: "Not logged in",
                });
            }

            //create plan
            Plan.create({
                name: req.body.name,
                target: req.body.target,
                difficulty: req.body.difficulty,
                schedule: req.body.days
            }, (err, plan) => {
                if (err) {
                    console.log(err);
                }
                else {
                    //push plan id to user
                    user.plans.push(plan._id);
                    // console.log(user.plans);
                    user.save();
                }
            });

        } catch (err) {
            res.status(400).send({
                error: "This username or email is already in use",
            });
        }
    },

    async findPlans(req, res) {
        try {
            // console.log(req.params);
            const user = await User.findOne({
                username: req.params.id,
            });

            // console.log(user);

            await Plan.find({ '_id': { $in: user.plans } }, function (err, plans) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(plans);
                    res.send(plans);
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    },

    async displayPlan(req, res) {
        const plan = await Plan.findOne({
            _id: req.params.id,
        });
        res.send(plan);
    }
}