 const router = require("express").Router();
const db = require("../../models");
const isAuthenticated = require("../../config/middleware/isAuthenticated");
// var isAuthenticated = require("../config/middleware/isAuthenticated");
router.post("/", isAuthenticated, function(req, res) {
    db.Venue.create({
        venueName: req.body.venueName,
        street_address: req.body.street_address,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        phone: req.body.phone,
        email: req.body.email,
        website: req.body.website,
        image: req.body.image,
        UserId: req.user.id
    }).then(function(response) {
        res.json(response)
    }).catch(function(err) {
        res.json(err);
    });
});
 

// Gets the venue's profile Information
router.get("/", isAuthenticated, function (req, res) {
    db.Venue.findOne({
        where: {
            UserId: req.user.id
        }
    }).then(function ( dbVenue ) {
        db.Gig.findAll({
            where:{
                id: dbVenue.id
            }
        }).then(function ( dbRequest ) {
            res.json(dbVenue);
        })
        .catch(err => res.json(err));
    });
});

// Updates the venue's profile information
router.put("/", isAuthenticated, function(req, res) {
    db.Venue.update({
        venueName: req.body.venueName,
        street_address: req.body.street_address,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        phone: req.body.phone,
        email: req.body.email,
        website: req.body.website,
        image: req.body.image
    }, {
        where: {
            UserId: req.user.id
        }
    }).then(response => res.json(response))
    .catch(err => res.json(err));
});

module.exports = router;