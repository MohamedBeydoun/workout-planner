const authentication = require("./routes/authentication");

module.exports = (app) => {
    app.post("/register", authentication.register);
};