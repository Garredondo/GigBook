const router = require("express").Router();
const db = require("../../models");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

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


router.get("/:id", (req, res) => {
    var VenueId = req.params.id;
    var gigsAndTheirArtists =[];
    db.Gig.findAll({
        where: {
            VenueId
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

module.exports = router;