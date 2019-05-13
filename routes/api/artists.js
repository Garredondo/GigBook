const router = require("express").Router();
const db = require("../../models");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

// create an artist's profile
router.route("/", isAuthenticated).post(function (req, res) {
    db.Artist.create({
        artistName: req.body.artistName,
        genre: req.body.genre,
        instrumentation: req.body.instruments,
        numberOfMembers: req.body.memberNum,
        email: req.body.email,
        phone: req.body.phone,
        profileImage: req.body.profileImg,
        website: req.body.website,
        // UserId: req.user.id
    }).then(response => {
        res.json(response);
    }).catch(err => {
        res.json(err);
    });
});


// findAll gigs that have not yet been verified
router.route("/", isAuthenticated).get(function (req, res) {
    db.Gig.findAll({
            where: {
                ArtistId: null
            }
        })
        .then(function (dbUnbookedGigs) {
            db.Venue.findAll({})
                .then(function (dbVenueAll) {
                    db.Artist.findOne({
                        where: {
                            UserId: req.user.id
                        },
                        include: [{model: db.Gig, as: "PotentialGig"}]
                    }).then(dbRequest => {
                        var resultsObj = {
                            allVenues: dbVenueAll,
                            availableGigs: dbUnbookedGigs,
                            artistRequests: dbRequest,
                            booked: dbRequest.PotentialGig
                        }

                        res.json(resultsObj);
                    }).catch(err => console.log(err))
                })
        })
});

//update an artist's profile
router.route("/", isAuthenticated).put(function(req, res) {
    db.Artist.update({
        artistName: req.body.artistName,
        genre: req.body.genre,
        instrumentation: req.body.instrumentation,
        numberOfMembers: req.body.numberOfMembers,
        phone: req.body.phone,
        email: req.body.email,
        website: req.body.website,
        profileImage: req.body.profileImage
    }, {
        where: {
            UserId: req.user.id
        }
    }).then(response => res.json(response))
    .catch(err => res.json(err));
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

    //End of Put method =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/
});

module.exports = router;