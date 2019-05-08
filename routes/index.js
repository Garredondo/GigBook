const path = require("path");
const apiRoutes = require("./api");
const router = require("express").Router();

router.use("/venues", apiRoutes);

<<<<<<< HEAD
router.use(function(req, res) {
    // res.sendFile(path.join(__dirname, "../client/build/index.html"));
    console.log(res.json())
})
=======
// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });
>>>>>>> master


module.exports = router;