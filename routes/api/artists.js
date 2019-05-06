const router = require("express").Router();
const db = require("../../models");

router.post("/", function(req, res) {
    db.Artist.create({
        artistName: req.body.artistName,
        genre: req.body.genre,
        instrumentation: req.body.instruments,
        numberOfMembers: req.body.memberNum,
        email: req.body.email,
        phone: req.body.phone,
        profileImage: req.body.profileImg,
        website: req.body.website,
        UserId: req.user.id
    }).then(response => {
        res.json(response);
    }).catch(err => {
        res.json(err);
    });
});
module.exports = router;