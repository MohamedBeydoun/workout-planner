let express = require("express");
let bodyParser = require("body-parser");
let app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.send("Home Page");
});

app.listen(8081, () => {
	console.log("Listening on port 8081...")
});
