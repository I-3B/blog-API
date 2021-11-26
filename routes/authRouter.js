const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const passport = require("passport");

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post(
    "/admin",
    passport.authenticate("jwt", { session: false }),
    authController.admin
);
module.exports = router;
