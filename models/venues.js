module.exports = function( sequelize, DataTypes ) {
    var Venue = sequelize.define("Venue", {
        venueName: DataTypes.STRING,
        street_address: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zipcode: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: DataTypes.STRING,
        website: DataTypes.STRING,
        image: DataTypes.STRING
    });


    Venue.associate = function( models ) {
      models.Venue.belongsTo(models.User);
      models.Venue.hasMany(models.Gig, {
          onDelete: "cascade"
        });
  };

    // Venue.associate = function(models) {
    //     // Associating Venue with Gigs
    //     // When an Venue is deleted, also delete any associated Posts
        
    //     Venue.hasMany(models.Gig, {
    //       onDelete: "cascade"
    //     });
    //   };
    // // // Venue Table
    // // Venue.associate = function( models ) {
    // //     models.Venue.belongsToMany( models.Artist, { through: models.Gig })
    // // };

    return Venue;
};