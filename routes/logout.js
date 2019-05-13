const router = require("express").Router();

router.get("/", function(req, res) {
    // console.log(" -------------Log user out-------------")
    req.logout();
    res.json();
});

module.exports = router;