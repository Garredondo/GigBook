const router = require("express").Router();
const db = require("../../models");

//  Posts to gigs table from venue view
router.post("/", function(req, res) {
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
router.get("/", function (req, res) {
    db.Gig.findAll({}).then(response => res.json(response))
    .catch(err => res.json(err));
});
// Get one specific gig
router.get("/:id", function (req, res) {
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
router.put("/:id", function (req, res) {
    var id = req.params.id
    console.log(id);
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
router.delete("/:id", function (req, res) {
    var id = req.params.id;
    db.Gig.destroy({
        where: {
            id: id
        }
    }).then(res => res.json(res))
    .catch(err => res.json(err));
});


module.exports = router;