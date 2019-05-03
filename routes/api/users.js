var db = require("../models");
// var passport = require("../config/passport");
// var isAuthenticated = require("../config/middleware/isAuthenticated");
var express    = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

module.exports = function (app) {
    app.post("/api/signup", function (req, res) {
        console.log(req.body);
        console.log(req.body.name);
        console.log(req.body.password);
        console.log(req.body.role);
        if (req.body.role == "artist") {
        db.User.create({
            name: req.body.name,
            password: req.body.password,
            role: req.body.role
        }).then(function () {
            console.log("Create artist callback: ");
            res.redirect(307, "/api/loginArtist");
            console.log("test");
        }).catch(function (err) {
            console.log(err);
            res.json(err);
        });
        } else {
        db.User.create({
            name: req.body.name,
            password: req.body.password,
            role: req.body.role
        }).then(function () {
            console.log("Create venue callback: ");
            res.redirect(307, "/api/loginVenue");
        }).catch(function (err) {
            console.log(err);
            res.json(err);
        });
        }
    });
}