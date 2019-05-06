const router = require("express").Router();
var db = require("../../models");
// var passport = require("../config/passport");
// var isAuthenticated = require("../config/middleware/isAuthenticated");

router.post("/", function (req, res) {
    if (req.body.role == "artist") {
    db.User.create({
        name: req.body.name,
        password: req.body.password,
        role: req.body.role
    }).then(function (response) {
        // res.redirect(307, "/api/loginArtist");
        res.json(response);
    }).catch(function (err) {
        res.json(err);
    });
    } else {
    db.User.create({
        name: req.body.name,
        password: req.body.password,
        role: req.body.role
    }).then(function (response) {
        // res.redirect(307, "/api/loginVenue");
        res.json(response);
    }).catch(function (err) {
        res.json(err);
    });
    }
});

module.exports = router;