// Eric's notes for project 3

// for a venue, look up all the gigs where gig’s VenueId = venue’s id
// // we get two things back
// - after we get a bunch of gigs, then find all the Requests where requests’s GigId = gig’s id
//    - include Artist’s data, where Request’s ArtistId = artist’s id

// gigs will display for Artists depending on whether or not artist ID is null inside of the gigs table. There is a new query required for this

//Also, not for this file we need to populate the artist ID, of the artist who made the request, whenever the Vender approves his/her book request 

var db = require("../models");
// var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
    // Get route for retrieving a single venue
    app.get("/api/venues/", function (req, res) {
        db.Venue.findOne({
            where: {
                UserId: req.user.id
            }
        }).then(function (dbVenue) {
            db.Gig.findAll({
                where:{
                    VenueId: dbVenue.id
                }
            }).then(function(dbGig) {
                var hbObject = {
                    venue: dbVenue,
                    gigs: dbGig
                }
                // console.log(dbVenue);
                res.render("index-venue", hbObject);
            })
        });
    });

    app.delete("/api/gigs/:id", function(req, res) {
        console.log(req.params.id);
        var id = req.params.id;
        db.Gig.destroy({
            where: {
                id: id
            }
        }).then(function() {
            res.send(200);
        });
    });
}