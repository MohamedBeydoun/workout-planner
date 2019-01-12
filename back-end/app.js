const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const passport = require("passport");
const app = express();

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieSession({
    name: "mysession",
    keys: ["vueauthrandomkey"],
    maxAge: 24 * 60 * 60 * 1000
}));

//dummy data
let users = [
    {
        id: 1,
        name: "Mohamed",
        email: "mohamed@email.com",
        password: "password"

    },
    {
        id: 2,
        name: "Kenji",
        email: "kenji@email.com",
        password: "password"

    }
];

//login api
app.post("/api/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) {
            return next(err);
        };

        if (!user) {
            return res.status(400).send([user, "Cannot log in", info]);
        };

        req.login(user, err => {
            res.send("Logged in");
        });
    })(req, res, next);
});

app.get("/api/logout", (req, res) => {
    req.logout;
    console.log("logged out");
    return res.send();
});

////////////////////////////////////////////
app.listen(8081, () => {
    console.log("Server listening on port 8081...")
});
