const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
let mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost/workout-planner", { useNewUrlParser: true });

app.use(bodyParser.json());
app.use(morgan("combined"));
app.use(cors());

app.post("/register", (req, res) => {
    res.send({
        message: "You are registered!",
    });
});

////////////////////////////////////////////
app.listen(8081, () => {
    console.log("Server listening on port 8081...")
});
