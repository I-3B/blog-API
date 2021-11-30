const express = require("express");
const router = express.Router();

router.get("/user", (req, res) => {
    if (req.user)
        res.json({ msg: "user is logged in", username: req.user.username });
    else res.json({ msg: "user is not logged in..." });
});

module.exports = router;
