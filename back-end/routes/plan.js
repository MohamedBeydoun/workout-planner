const Plan = require("../models/plan");
const User = require("../models/user");

module.exports = {
    async newPlan(req, res) {
        try {
            let username = req.body.username;

            const user = await User.findOne({
                username: username,
            });

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
                schedule: req.body.days,
                meals: req.body.meals
            }, (err, plan) => {
                if (err) {
                    console.log(err);
                }
                else {
                    //push plan id to user
                    user.plans.push(plan._id);
                    console.log("making the plan now")
                    console.log(plan);
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
            const user = await User.findOne({
                username: req.params.id,
            });

            await Plan.find({ '_id': { $in: user.plans } }, function (err, foundPlans) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send(foundPlans);
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
    },

    async deletePlan(req, res) {
        try {

            const user = await User.findOne({
                username: req.params.user,
            });

            if (!user) {
                console.log("User not found")
            }

            await Plan.find({ "_id": req.params.id }, function (err, plan) {
                if (err) {
                    console.log(err);
                }
                else {
                    user.plans.splice(user.plans.indexOf(plan._id), 1);
                    Plan.findOneAndDelete(plan._id, (err) => {
                        console.log(err);
                    })
                    user.save();
                }
            });

        }
        catch (err) {
            console.log(err);
        }
    }
}