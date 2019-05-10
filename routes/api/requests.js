const router = require("express").Router();
const db = require("../../models");

router.post("/", (req, res) => {
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

module.exports = router;