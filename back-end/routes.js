const authentication = require("./routes/authentication");
const newPlan = require("./routes/newPlan");
const authenticationPolicy = require("./policies/authenticationPolicy")

module.exports = (app) => {
    app.post("/register", authenticationPolicy.register, authentication.register);
    app.post("/login", authentication.login);
    app.post("/newPlan", newPlan.newPlan);
    app.get("/dashboard/:id", newPlan.findPlans);
    app.get("/plan/:id", newPlan.displayPlan);
};