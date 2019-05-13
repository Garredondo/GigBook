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

// establish association between venues and gigs
// establish association between venues and users
    Venue.associate = function( models ) {
      models.Venue.belongsTo(models.User);
      models.Venue.hasMany(models.Gig, {
          onDelete: "cascade"
        });
  };

    return Venue;
};