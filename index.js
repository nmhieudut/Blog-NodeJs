var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var config = require("config");
var host = config.get("server.host");
var port = config.get("server.port");

var controllers = require(__dirname + "/app/controllers");
//body parser
app.use(bodyParser.json());

app.set("views", __dirname + "/app/views");
app.set("view engine", "ejs");

//static folder
app.use("/static", express.static(__dirname + "/public"));

app.use(controllers);

app.listen(port, host, () => console.log("Listening on port 3000"));
