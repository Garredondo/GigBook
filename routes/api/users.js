const router = require("express").Router();
var db = require("../../models");

router.post("/", function (req, res) {

    db.User.create({
        name: req.body.name,
        password: req.body.password,
        role: req.body.role
    }).then(function (response) {
        if (req.body.role == "artist") {
        res.json(response);
        } else {
        res.json(response);
        }
        // res.json(response);
    }).catch(function (err) {
        res.json(err);
    });
});

module.exports = router;