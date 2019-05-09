// Eric's notes for project 3

// gigs will display for Artists depending on whether or not artist ID is null inside of the gigs table. There is a new query required for this

//Also, not for this file, we need to populate the artist ID, of the artist who made the request, whenever the Vender approves his/her book request 
const router = require("express").Router();
const db = require("../../models");
// var isAuthenticated = require("../config/middleware/isAuthenticated");
router.post("/", function(req, res) {
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
 
// project 3 notes:
// for a venue, look up all the gigs where gig’s VenueId = venue’s id
// // we get two things back
// - after we get a bunch of gigs, then find all the Requests where requests’s GigId = gig’s id
// - include Artist’s data, where Request’s ArtistId = artist’s id


// Get route for retrieving a single venue
// router.get("/", function (req, res) {
//     db.Venue.findOne({
//         where: {
//             UserId: req.user.id
//         }
//     }).then(function ( dbVenue ) {
//         db.Gig.findAll({
//             where:{
//                 VenueId: dbVenue.id
//             },
//             include: [db.Artist]
//         }).then(function ( dbRequest ) {
//             res.json(dbRequest);
//         });
//     });
// });

router.get("/", function (req, res) {
    db.Venue.findOne({
        where: {
            UserId: req.user.id
        }
    }).then(response => {
        res.json(response);
    })
    .catch(err => res.json(err));
});

router.put("/", function(req, res) {
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