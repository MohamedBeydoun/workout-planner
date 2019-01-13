let mongoose = require('mongoose');

//how to identify each plan by id when it is added to user?
//should i add user to plan schema for reference?
let planSchema = new mongoose.Schema({
    name: String,
    difficulty: String,
    target: String,
    schedule: [{
        title: String,
        date: String,
        workouts: [{
            name: String,
            reps: String,
            sets: String
        }]
    }],
    mealPlan: [{
        title: String,
        meal: []
    }]
});

module.exports = mongoose.model("Plan", planSchema);