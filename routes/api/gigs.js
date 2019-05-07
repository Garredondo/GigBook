/* eslint-disable no-console */
/* eslint-disable no-undef */
var db = require("../models");
module.exports = function(app) {
    //  Posts to gigs table from venue view
    app.post("/api/gigs", function(req, res) {
        db.Venue.findAll({
            where: {
                UserId: req.user.id
            }
        }).then(function(venueInfo) {
            console.log(venueInfo[0].image);
            console.log(venueInfo[0].venueName);
            console.log(venueInfo[0].id);
                db.Gig.create({
                    date: req.body.gigDate,
                    description: req.body.gigDes,
                    genre: req.body.gigGenre,
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
    // Get one specific gig
    app.get("/api/gigs/:id", function (req, res) {
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

    app.put("/api/gigs/:id", function (req, res) {
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
}