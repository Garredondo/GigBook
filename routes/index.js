const path = require("path");
const apiRoutes = require("./api");
const router = require("express").Router();

router.use("/venues", apiRoutes);

router.use(function(req, res) {
    // res.sendFile(path.join(__dirname, "../client/build/index.html"));
    console.log(res.json())
})


module.exports = router;