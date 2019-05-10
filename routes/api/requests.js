const router = require("express").Router();
const db = require("../../models");

router.post("/", (req, res) => {
    var ArtistId=req.body.ArtistId;
    var GigId=req.body.GigId;
    db.Artist.findAll({ 
        where: {
            id: ArtistId
    }}).then(artist => {
        db.Gig.findAll({ 
            where: {
                id: GigId
        }}).then(gig => {
            artist.setGigs([gig])
            // db.Requests.create({
            //     ArtistId: ArtistId,
            //     GigId: GigId
            // })
            .then(response => res.json(response))
            .catch(err => res.json(err));
        })
    })
});

module.exports = router;