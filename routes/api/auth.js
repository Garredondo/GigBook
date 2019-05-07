const router = require("express").Router();
const passport = require("../../config/passport");

router.post("/", passport.authenticate("local"), (req, res) => {
    res.json({
        id: req.user.id,
        role: req.body.role
    });
});

module.exports = router;