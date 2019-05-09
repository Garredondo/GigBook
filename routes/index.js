const path = require("path");
const apiRoutes = require("./api");
const logout = require("./logout");
const router = require("express").Router();

router.use("/api", apiRoutes);
router.use("/logout", logout);

// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;