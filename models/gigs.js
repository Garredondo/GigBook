module.exports = function (sequelize, DataTypes) {
    var Gig = sequelize.define("Gig", {

        gigName: DataTypes.STRING,
        genre: DataTypes.STRING,
        // street_address: DataTypes.STRING,
        // city: DataTypes.STRING,
        // state: DataTypes.STRING,
        // zipcode: DataTypes.STRING,
        // phone: DataTypes.STRING,
        description: DataTypes.STRING,
        image: DataTypes.STRING,
        date: DataTypes.STRING,
        ArtistId: DataTypes.INTEGER
    });

    // establish association to artists through the requests table as potential artist
        Gig.associate = function( models ) {
            models.Gig.belongsToMany(models.Artist, {as: "PotentialArtist", through: "Requests"})
        };

    return Gig;
}