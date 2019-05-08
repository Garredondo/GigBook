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
        // This is commented out because req.user comes from passport
        // UserId: req.user.id
    }).then(response => {
        res.json(response);
    }).catch(err => {
        res.json(err);
    });
});


// findAll gigs that have not yet been verified
router.get("/", function(req,res){
    db.Gig.findAll({
        where:{
            ArtistId: null
        }
    }).then(function( dbUnbookedGigs ){
       db.Artist.findOne({
           where: {
            //    id: req.user.id
                UserId: 3
           },
           include: [db.Gig]
       }).then(dbRequest => {
           res.json(dbRequest);
       })
    })
})

module.exports = router;
