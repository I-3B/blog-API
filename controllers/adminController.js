const Post = require("../modules/Post");
const Comment = require("../modules/Comment");

const { body, validationResult } = require("express-validator");
exports.isUserAnAdmin = (req, res) => {
    if (req.user.admin) {
        res.json({ isAdmin: true });
    } else {
        res.json({ isAdmin: false });
    }
};
exports.getPost = (req, res, next) => {
    Post.findById(req.params.id).exec((err, post) => {
        if (err) next(err);
        else if (!post) res.status(404).json({ msg: "Post not found" });
        else res.json(post);
    });
};
exports.getAllPosts = (req, res, next) => {
    if (req.user.admin) {
        Post.find()
            .select("title publishedAt published")
            .exec((err, posts) => {
                if (err) next(err);
                else res.json(posts);
            });
    } else {
        return res.json({ msg: "user is not an admin" });
    }
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
            } else {
                new Post({
                    title: req.body.title,
                    content: req.body.content,
                    published: req.body.published,
                    publishedAt: Date.now(),
                }).save((err, post) => {
                    if (err) next(err);
                    res.json({
                        msg: "post got posted successfully",
                        post,
                        passed: true,
                    });
                });
            }
        } else {
            res.status(403).json({
                msg: "user is not an admin",
                passed: false,
            });
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
                    res.json({
                        msg: "post got edited successfully",
                        post,
                        passed: true,
                    });
                }
            );
        } else {
            res.status(403).json({
                msg: "user is not an admin",
                passed: false,
            });
        }
    },
];
exports.deletePost = (req, res, next) => {
    if (req.user.admin) {
        Post.findByIdAndDelete(req.params.id, (err, post) => {
            if (err) next(err);
            Comment.deleteMany({ post: req.params.id }, (err, comments) => {
                if (err) next(err);
                res.json({
                    msg: "post got deleted successfully",
                    post,
                    comments,
                    passed: true,
                });
            });
        });
    } else {
        res.status(403).json({ msg: "user is not an admin", passed: false });
    }
};
