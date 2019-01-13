const authentication = require("./routes/authentication");
const authenticationPolicy = require("./policies/authenticationPolicy")

module.exports = (app) => {
    app.post("/register", authenticationPolicy.register, authentication.register);
};