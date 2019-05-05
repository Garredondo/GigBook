const router = require("express").Router();
const db = require("../../models");

module.exports = function(app) {

    app.post("/api/artists", function(req, res) {
        console.log(req.body);
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
        }).then(function() {
            res.json({url:"api/artists"});
        }).catch(function(err) {
            console.log(err);
            res.json(err);
        });
    });
}