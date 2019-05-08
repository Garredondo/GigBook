module.exports = function (sequelize, DataTypes) {
    var Gig = sequelize.define("Gig", {

        gigName: DataTypes.STRING,
        genre: DataTypes.STRING,
        street_address: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zipcode: DataTypes.STRING,
        phone: DataTypes.STRING,
        description: DataTypes.STRING,
        image: DataTypes.STRING,
    });

    // create an association thing e.g.  Artist.associate = function( models ) {
        Gig.associate = function( models ) {
            models.Gig.belongsToMany(models.Artist, {through: "Requests"})
        };

    // Another association belongsToMany with Gigs

    return Gig;
}