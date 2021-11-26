const express = require("express");
const router = express.Router();

router.get("/user", (req, res) => {
    if (req.user) res.json(req.user);
    else res.json({ msg: "user is not signed in..." });
});

module.exports = router;
