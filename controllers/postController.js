const Post = require("../modules/Post");
const { body, validationResult } = require("express-validator");

exports.getAllPosts = (req, res, next) => {
    Post.find({ published: true }).exec((err, posts) => {
        if (err) next(err);
        else res.json(posts);
    });
};

exports.getPost = (req, res, next) => {
    Post.findById(req.params.id).exec((err, post) => {
        if (err) next(err);
        else if (!post || !post.published)
            res.status(404).json({ msg: "Post not found" });
        else res.json(post);
    });
};
