let mongoose = require('mongoose');

//how to identify each plan by id when it is added to user?
//should i add user to plan schema for reference?
let planSchema = new mongoose.Schema({
    name: String,
    difficulty: String,
    target: String,
    //schedule is an array of objects
    schedule: [
        // {
        // title: String,
        // // date: String,
        // //workouts is an array of workouts --> can add reps and sets?
        // workouts: [
        //     //lookup how this should look
        // ]
        // }
    ],
    meals: [
        //do mealPlan model
    ]
});

module.exports = mongoose.model("Plan", planSchema);