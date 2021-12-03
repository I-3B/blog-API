const express = require("express");
const router = express.Router();
const passport = require("passport");
const postController = require("../controllers/postController");
const commentController = require("../controllers/commentController");

router.get("/", postController.getAllPosts);
router.get("/:id", postController.getPost);
router.get("/:postId/comments", commentController.getAllComments);
router.get("/:postId/comments/count", commentController.getAllCommentsCount);

router.post(
    "/:postId/comments",
    passport.authenticate("jwt", { session: false }),
    commentController.postComment
);
router.get("/:postId/comments/:id", commentController.getComment);
module.exports = router;
