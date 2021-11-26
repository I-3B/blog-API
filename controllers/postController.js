const Post = require("../modules/Post");
const { body, validationResult } = require("express-validator");

exports.getAllPosts = (req, res, next) => {
    Post.find({ published: true }).exec((err, posts) => {
        if (err) next(err);
        else res.json(posts);
    });
};
exports.postPost = [
    body("title")
        .exists()
        .trim()
        .isLength({ min: 1, max: 100 })
        .withMessage(
            "title cannot be less than 1 character and more than 100 characters."
        )
        .escape(),
    body("content")
        .exists()
        .trim()
        .isLength({ min: 1, max: 5000 })
        .withMessage(
            "content cannot be less than 1 character and cannot be more than 5000"
        )
        .escape(),
    body("published")
        .exists()
        .isBoolean()
        .withMessage("published must be a boolean"),
    (req, res, next) => {
        if (req.user.admin) {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({
                    msg: "post posting failed",
                    errors: [...errors.array()],
                });
            }
            new Post({
                title: req.body.title,
                content: req.body.content,
                published: req.body.published,
                publishedAt: Date.now(),
            }).save((err, post) => {
                if (err) next(err);
                res.json({ msg: "post got posted successfully", post });
            });
        } else {
            res.status(403).json({ msg: "user is not an admin" });
        }
    },
];
exports.editPost = [
    body("title")
        .exists()
        .trim()
        .isLength({ min: 1, max: 100 })
        .withMessage(
            "title cannot be less than 1 character and more than 100 characters."
        )
        .escape(),
    body("content")
        .exists()
        .trim()
        .isLength({ min: 1, max: 5000 })
        .withMessage(
            "content cannot be less than 1 character and cannot be more than 5000"
        )
        .escape(),
    body("published")
        .exists()
        .isBoolean()
        .withMessage("published most be a boolean"),
    (req, res, next) => {
        if (req.user.admin) {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({
                    msg: "post editing failed",
                    errors: [...errors.array()],
                });
            }
            Post.findByIdAndUpdate(
                req.params.id,
                {
                    title: req.body.title,
                    content: req.body.content,
                    published: req.body.published,
                },
                {
                    new: true,
                },
                (err, post) => {
                    if (err) next(err);
                    res.json({ msg: "post got edited successfully", post });
                }
            );
        } else {
            res.status(403).json({ msg: "user is not an admin" });
        }
    },
];
exports.deletePost = (req, res, next) => {
    if (req.user.admin) {
        Post.findByIdAndDelete(
            req.params.id,

            (err, post) => {
                if (err) next(err);
                res.json({ msg: "post got deleted successfully", post });
            }
        );
    } else {
        res.status(403).json({ msg: "user is not an admin" });
    }
};
exports.getPost = (req, res, next) => {
    Post.findById(req.params.id).exec((err, post) => {
        if (err) next(err);
        else if (!post || !post.published)
            res.status(404).json({ msg: "Post not found" });
        else res.json(post);
    });
};
