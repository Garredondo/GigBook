const router = require("express").Router();
const db = require("../../models");

router.route("/").post(function (req, res) {
    db.Artist.create({
        artistName: req.body.artistName,
        genre: req.body.genre,
        instrumentation: req.body.instruments,
        numberOfMembers: req.body.memberNum,
        email: req.body.email,
        phone: req.body.phone,
        profileImage: req.body.profileImg,
        website: req.body.website,
        // This is commented out because req.user comes from passport
        // UserId: req.user.id
    }).then(response => {
        res.json(response);
    }).catch(err => {
        res.json(err);
    });
});


// findAll gigs that have not yet been verified
router.route("/").get(function (req, res) {
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
                            // id: 3
                        },
                        include: [{model: db.Gig, as: "PotentialGig"}]
                    }).then(dbRequest => {
                        console.log(dbRequest);
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


router.route("/").put(function(req, res) {
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
            // UserId: 2
            UserId: req.user.id
        }
    }).then(response => res.json(response))
    .catch(err => res.json(err));
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

    //End of Put method =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/
});

// get the id of the gig and the id of the artist and post it to the requests table
// router.put("/", function(req, res) {
//     db.Requests.update({
//         gigId:1,
//         ArtistId:6
//     }).then(response => res.json(response))
//     .catch(err => res.json(err));
// });

module.exports = router;