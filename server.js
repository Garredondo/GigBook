var index = require("./routes/index");
require("dotenv").config();
var express = require("express");

var session = require("express-session");

var db = require("./models");
var passport = require("./config/passport");

const routes = require("./routes");


var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.use(session({ secret: "keyboard kitty", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


app.use(routes);

var syncOptions = { force: false };

if (process.env.NODE_ENV === "test") {
  syncOptions.force = false;
}

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
