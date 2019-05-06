const router = require("express").Router();

const artistsRoutes = require("./artists");
// const gigsRoutes = require("./gigs");
const userRoutes = require("./users");
const venuesRoutes = require("./venues");

router.use("/artists", artistsRoutes);
// router.use("/gigs", gigsRoutes);
router.use("/users", userRoutes);
router.use("/venues", venuesRoutes);

module.exports = router;



