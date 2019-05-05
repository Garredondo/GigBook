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
        //these booleans are no longer needed. our queries will rely on whether or not the artist ID field is null
        // date: DataTypes.STRING,
        // artist_booked: {
        //     type: DataTypes.BOOLEAN,
        //     defaultValue: false,
        //     allowNull: false
        // },
        // venu_verified: {
        //     type: DataTypes.BOOLEAN,
        //     defaultValue: false,
        //     allowNull: false
        // }
    });

    // create an association thing e.g.  Artist.associate = function( models ) {
        Gig.associate = function( models ) {
            models.Gig.belongsToMany(models.Artist, {through: "Requests"})
        };

    // Another association belongsToMany with Gigs

    return Gig;
}