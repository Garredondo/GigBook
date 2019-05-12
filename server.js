// var index = require("./routes/index");
require("dotenv").config();
const path = require("path");
var express = require("express");


// This is for Passport
const session = require("express-session");
const passport = require("./config/passport");

var db = require("./models");
const routes = require("./routes");
var app = express();
var PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// This is for Passport
app.use(session({ secret: "keyboard kitty", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Code to run React Build
console.log("NODE ARGUMENT---------------------");
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(routes);

var syncOptions = { force: false };

if (process.env.NODE_ENV === "test") {
  syncOptions.force = false;
}

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
