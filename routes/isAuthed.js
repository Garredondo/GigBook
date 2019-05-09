const router = require("express").Router();
const isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/",  function(req, res) {
    if(req.user) {
        res.json("true");
    } else {
        res.json("false");
    }
});

module.exports = router;