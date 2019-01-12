const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();

app.use(bodyParser.json());

app.post("/signup", (req, res) => {
    res.send({
        message: "You are registered!",
    });
});

////////////////////////////////////////////
app.listen(8081, () => {
    console.log("Server listening on port 8081...")
});
