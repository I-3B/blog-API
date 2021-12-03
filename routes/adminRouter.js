const express = require("express");
const passport = require("passport");
const router = express.Router();
const adminController = require("../controllers/adminController");
router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    adminController.isUserAnAdmin
);
router.get("/posts", adminController.getAllPosts);
router.get(
    "/posts/:id",
    passport.authenticate("jwt", { session: false }),
    adminController.getPost
);
router.post(
    "/posts",
    passport.authenticate("jwt", { session: false }),
    adminController.postPost
);

router.put(
    "/posts/:id",
    passport.authenticate("jwt", { session: false }),
    adminController.editPost
);
router.delete(
    "/posts/:id",
    passport.authenticate("jwt", { session: false }),
    adminController.deletePost
);

module.exports = router;
