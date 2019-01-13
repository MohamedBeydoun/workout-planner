const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();

let User = require("./models/user");
let Plan = require("./models/plan");

app.use(bodyParser.json());
app.use(morgan("combined"));
app.use(cors());
mongoose.set('useCreateIndex', true);

require("./routes")(app);

////////////////////////////////////////////
mongoose.connect("mongodb://localhost:27017/workout-planner", { useNewUrlParser: true });

app.listen(8081, () => {
    console.log("Server listening on port 8081...")
});
