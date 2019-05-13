const router = require("express").Router();
const db = require("../../models");
const isAuthenticated = require("../../config/middleware/isAuthenticated");
const Sequelize = require("sequelize");


//  Posts to gigs table from venue view
router.post("/", isAuthenticated, function(req, res) {
    db.Venue.findAll({
        where: {
            UserId: req.user.id
        }
    }).then(function(venueInfo) {
        console.log(venueInfo[0].image);
        console.log(venueInfo[0].venueName);
        console.log(venueInfo[0].id);
            db.Gig.create({
                date: req.body.date,
                description: req.body.description,
                genre: req.body.genre,
                VenueId: venueInfo[0].id,
                gigName: venueInfo[0].venueName,
                image: venueInfo[0].image
        }).then(function() {
            res.send(200);
        }).catch(function(err) {
            console.log(err);
            res.json(err);
        });
    });
});

// router.get("/", function (req, res) {
//     db.Gig.findAll({}).then(response => res.json(response))
//     .catch(err => res.json(err));
// });


// Gets the venue's unbooked gigs
router.get("/unbooked/:id", function(req, res) {
    var id = req.params.id;
    db.Gig.findAll({
        where: {
            VenueId: id
        }
    }).then(response => {
        res.json(response);
    }).catch(err => res.json(err));
});

router.get("/booked/:id", function(req, res) {
    var id = req.params.id;
    var query = `
    SELECT *, gigs.id AS gigsId FROM gigs
    LEFT JOIN artists ON gigs.ArtistId = artists.id
    UNION
    SELECT *, gigs.id AS gigsID FROM gigs
    RIGHT JOIN artists ON gigs.ArtistId = artists.id
    WHERE VenueId=${id}`;
    db.sequelize.query(query)
    .then(response => {
        res.json(response);
    }).catch(err => res.json(err));
});

// Gets the venue's booked gigs
// router.get("/booked/:id", function(req, res) {
//     var id = req.params.id;
//     var bookedArray = [];
//     db.Artist.findAll().then(artists => {
//         db.Gig.findAll({
//             where: {
//                 VenueId: id
//             }
//         }).then(gigs => {
//             console.log(artists[0].dataValues);
//             for(var i = 0; i < gigs.length; i++) {
//                 if(gigs[i].dataValues.ArtistId) {
//                     for(var j = 0; j < artists.length; j++) {
//                         if(gigs[i].dataValues.ArtistId === artists[j].dataValues.id) {
//                             bookedArray.push(gigs[i] + artists[j]);
//                         }
//                     }
//                 }
//             }
//         }).catch(err => res.json(err));
//     }).catch(err => res.json(err));
// });


// Get one specific gig
router.get("/:id", isAuthenticated, function (req, res) {
    var gigId = req.params.id
    db.Gig.findOne({
        where: {
            VenueId: gigId
        }
    }).then(function(results) {
        var hbsObject = {
            gigs: results
        }
        res.send(hbsObject);
    });
});

// This update a gig to "booked" -----Outdated?
router.put("/:id", isAuthenticated, function (req, res) {
    var id = req.params.id;
    db.Gig.update({
        isBooked: true
        }, { where: {
            id: id
        }
    }).then(function(results) {
        res.send(results);
    });
});

// This deletes a single gig
router.delete("/:id", isAuthenticated, function (req, res) {
    var id = req.params.id;
    db.Gig.destroy({
        where: {
            id: id
        }
    }).then(res => res.json(res))
    .catch(err => res.json(err));
});


module.exports = router;