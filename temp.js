
require("dotenv").config();
const db = require("./models");

db.sequelize.sync().then(() => {
    console.log("Woo!");
    db.Venue.findAll({
        where: {
            phone: "(555) 555-5555"
        },
        include: [db.Gig]
    }).then(function ( dbVenues ) {
        dbVenues.forEach(v => {
            v.Gigs.forEach(g => {
                console.log(`${v.dataValues.venueName} - ${g.dataValues.gigName} - ${g.dataValues.description}`);
            })
        })
    }).catch(err => console.log(err));
})