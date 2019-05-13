const router = require("express").Router();
const db = require("../../models");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

// Artists submit requests to book a gig
router.post("/", isAuthenticated, (req, res) => {
    var ArtistId=req.body.ArtistId;
    var GigId=req.body.GigId;
    db.Artist.findOne({ 
        where: {
            id: ArtistId
    }}).then(artist => {
        db.Gig.findOne({ 
            where: {
                id: GigId
        }}).then(gig => {
            artist.addPotentialGig(gig)
            .then(response => res.json(response))
            .catch(err => res.json(err));
        })
    })
});

// this is where we get data to display potential artists to venues
router.get("/:id", (req, res) => {
    var VenueId = req.params.id;
    var gigsAndTheirArtists =[];
    db.Gig.findAll({
        where: {
            VenueId,
            ArtistId: null
        },
        include: [{model: db.Artist, as: "PotentialArtist"}]
    }).then(gigs => {
        for(let i = 0; i < gigs.length; i++) {
            if(gigs[i].PotentialArtist.length > 0) {
                gigsAndTheirArtists.push(gigs[i]);
            }
        }
        res.json(gigsAndTheirArtists);
    }).catch(err => res.json(err));
});

// Venues confirm a gig. update the gigs table
router.put("/:gigId/:venueId/:artistId", (req, res) => {
    var gigId = req.params.gigId;
    var venueId = req.params.venueId;
    var artistId = req.params.artistId;
    db.Gig.update(
        {ArtistId: artistId},
        {where: {
            id: gigId
        }}
    ).then(results => {
        res.json(results);
    }).catch(err => res.json(err));
});


module.exports = router;