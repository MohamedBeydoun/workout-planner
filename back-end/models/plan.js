let mongoose = require('mongoose');

let planSchema = new mongoose.Schema({
    name: String,
    difficulty: String,
    target: String,
    id: String,
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