const router = require("express").Router();
const db = require("../../models");

router.post("/", function (req, res) {
    if(req.body.role === "artist") {
        db.User.create({
            name: req.body.name,
            password: req.body.password,
            role: req.body.role
        }).then(function(response) {
            db.Artist.create({
                UserId: response.id,
                artistName: "",
                genre: "",
                instrumentation: "",
                numberOfMembers: 0,
                email: "",
                phone: "",
                profileImage: "",
                website: ""
            }).then(function (response) {
                res.json(response);
            }).catch(function (err) {
                res.json(err);
            });
        });
    } else {
        db.User.create({
            name: req.body.name,
            password: req.body.password,
            role: req.body.role
        }).then(function(response) {
            db.Venue.create({
                UserId: response.id,
                venueName: "",
                street_address: "",
                city: "",
                state: "",
                zipcode: "",
                phone: "",
                email: "",
                website: "",
                image: ""
            }).then(function (response) {
                res.json(response);
            }).catch(function (err) {
                res.json(err);
            });
        });
    }
});


router.delete("/:id", function(req, res){
    db.User.delete({
        where: {
            UserId: req.params.id
        }
    }).then(window.location.replace("/"))
    .cath(err => res.json(err));
})

module.exports = router;