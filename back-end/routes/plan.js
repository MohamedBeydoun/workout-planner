const Plan = require("../models/plan");
const User = require("../models/user");

module.exports = {
    async newPlan(req, res) {
        try {
            let username = req.body.username;
            let name, target, difficulty;

            //placeholders for empty input fields
            if (req.body.name == "")
                name = "N/A";
            else
                name = req.body.name;

            if (req.body.target == "")
                target = "N/A";
            else
                target = req.body.target;

            if (req.body.difficulty == "")
                difficulty = "N/A";
            else
                difficulty = req.body.difficulty;

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
            const plan = await Plan.create({
                name: name,
                target: target,
                difficulty: difficulty,
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
                    res.send();
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

            const plans = await Plan.find({ '_id': { $in: user.plans } }, function (err, foundPlans) {
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

            Plan.find({ "_id": req.params.id }, function (err, plan) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(user.plans);
                    console.log(req.params.id);
                    user.plans.splice(user.plans.indexOf(req.params.id), 1);
                    console.log(user.plans);
                    Plan.findOneAndDelete({ _id: req.params.id }, (err, deletedPlan) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(deletedPlan._id);
                        }
                    });
                    user.save();
                    res.send();

                }
            });

        }
        catch (err) {
            console.log(err);
        }
    }
}