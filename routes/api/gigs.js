var db = require("../models");
module.exports = function(app) {


//     CREATE TABLE gigs
// (
//   id int NOT NULL AUTO_INCREMENT,
//   venue_id int NOT NULL,
//   artist_id int NOT NULL,
//   date DATETIME,
//   PRIMARY KEY (id),
//   FOREIGN KEY (venue_id) REFERENCES venues(id),
//   FOREIGN KEY (artist_id) REFERENCES artists(id)
// );

    // Get one specific gig
    app.get("/api/gigs/:id", function (req, res) {
        var gigId = req.params.id
        db.Gig.findOne({
            where: {
                GigId?: gigId
            }
        }).then(function(results) {
            var hbObject = {
                gigs: results
            }
            res.render("index-gig", hbObject);
        });
    });

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
