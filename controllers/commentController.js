const Comment = require("../modules/Comment");
const { body, validationResult } = require("express-validator");

exports.getAllComments = (req, res, next) => {
    Comment.find({ post: req.params.postId }).exec((err, comments) => {
        if (err) next(err);
        else res.json(comments);
    });
};
exports.getAllCommentsCount = (req, res, next) => {
    Comment.find({ post: req.params.postId })
        .count()
        .exec((err, commentsCount) => {
            if (err) next(err);
            res.json({ post: req.params.postId, commentsCount });
        });
};
exports.postComment = [
    body("content")
        .exists()
        .trim()
        .isLength({ min: 1, max: 1000 })
        .withMessage(
            "comment cannot be less than one character and more than 1000 characters."
        )
        .escape(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({
                msg: "comment posting failed",
                errors: [...errors.array()],
            });
        } else {
            new Comment({
                author: req.user.username,
                post: req.params.postId,
                content: req.body.content,
                publishedAt: Date.now(),
            }).save((err, comment) => {
                if (err) next(err);
                res.json({ msg: "comment got posted successfully", comment });
            });
        }
    },
];

exports.getComment = (req, res, next) => {
    Comment.findById(req.params.id).exec((err, comment) => {
        if (err) next(err);
        else if (!comment) res.status(404).json({ msg: "Comment not found" });
        else res.json(comment);
    });
};
