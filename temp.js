require("dotenv").config();
const db = require("./models");

db.sequelize.sync({force:true}).then(() => {
    db.Gig.create({
        gigName: "some gig",
        genre: "some genre"
    }).then(dbGig => {
        console.log(dbGig);
        db.Artist.create({
            artistName: "some artist",
            genre: "some genre",
        }).then(dbArtist => {
            dbArtist.addPotentialGig(dbGig).then(
                () => dbGig.getPotentialArtist().then(result =>
                    console.log(result)
                )
            );
        })
    })
})