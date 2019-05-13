const router = require("express").Router();
const db = require("../../models");


router.get("/:name", function(req, res){
    let userName = req.params.name;
    db.User.findAll({
        where: {
            name: userName
        }
    })
    .then(function(results){
        res.send(results);
    })
    .catch(error => {
        res.json(error);
    })
});

//create user venue else artist
router.post("/", function (req, res) {
    if(req.body.role === "artist") {
        db.User.create({
            name: req.body.name,
            password: req.body.password,
            role: req.body.role
        }).then(function(response) {
            db.Artist.create({
                UserId: response.id,
                artistName: "",
                genre: "",
                instrumentation: "",
                numberOfMembers: 0,
                email: "",
                phone: "",
                profileImage: "",
                website: ""
            }).then(function(response){
                // console.log(response.data);
                // console.log(response.status);
                // console.log(response.statusText);
            }).catch(function (error) {
                if(error.response){
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request){
                    console.log(error.request);
                } else {
                    console.log("Error", error.message);
                }
                console.log(error.config);
            });
        });
    } else {
        db.User.create({
            name: req.body.name,
            password: req.body.password,
            role: req.body.role
        }).then(function(response) {
            db.Venue.create({
                UserId: response.id,
                venueName: "",
                street_address: "",
                city: "",
                state: "",
                zipcode: "",
                phone: "",
                email: "",
                website: "",
                image: ""
            }).then(function(response){
                // console.log(response.data);
                // console.log(response.status);
                // console.log(response.statusText);
            }).catch(function (error) {
                if(error.response){
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request){
                    console.log(error.request);
                } else {
                    console.log("Error", error.message);
                }
                console.log(error.config);
            });
        });
    }
});

//delete user
router.delete("/:id", function(req, res){
    db.User.delete({
        where: {
            UserId: req.params.id
        }
    }).then(window.location.replace("/"))
    .cath(err => res.json(err));
})

module.exports = router;