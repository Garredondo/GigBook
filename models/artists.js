module.exports = function( sequelize, DataTypes ) {
    var Artist = sequelize.define("Artist", {
        artistName: DataTypes.STRING,
        genre: DataTypes.STRING,
        instrumentation: DataTypes.STRING,
        numberOfMembers: DataTypes.INTEGER,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        profileImage: DataTypes.TEXT,
        website: DataTypes.STRING
    });

    // // Artist Table
    Artist.associate = function( models ) {
        models.Artist.belongsToMany(models.Gig, {through: "Requests"})
        models.Artist.belongsTo(models.User);
        models.Artist.hasMany(models.Gig);
    };

    return Artist;
};