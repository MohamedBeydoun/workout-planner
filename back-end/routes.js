const authentication = require("./routes/authentication");
const plan = require("./routes/plan");
const authenticationPolicy = require("./policies/authenticationPolicy")

module.exports = (app) => {
    app.post("/register", authenticationPolicy.register, authentication.register);
    app.post("/login", authentication.login);
    app.post("/newPlan", plan.newPlan);
    app.get("/dashboard/:id", plan.findPlans);
    app.get("/plan/:id", plan.displayPlan);
    app.delete("/plan/:user/:id", plan.deletePlan)
};