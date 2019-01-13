const authentication = require("./routes/authentication");
const authenticationPolicy = requrie("./policies/authenticationPolicy")

module.exports = (app) => {
    app.post("/register", authenticationPolicy.register, authentication.register);
};