if (!process.env.NODE_ENV) require("dotenv").config();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const async = require("async");
const jwt = require("jsonwebtoken");
const User = require("../modules/User");
exports.signup = [
    body("username")
        .exists()
        .trim()
        .matches("^[a-zA-Z0-9_]+$")
        .withMessage(
            "username can only contain A-Z, a-z, 0-9 and underscore( _ )"
        )
        .isLength({ min: 3, max: 16 })
        .withMessage(
            "username cannot be less than 3 characters and more than 16."
        )
        .escape(),
    body("password")
        .exists()
        .trim()
        .isLength({ min: 8, max: 16 })
        .withMessage(
            "password cannot be less than 8 or more then 16 characters."
        )
        .escape(),
    body("email")
        .exists()
        .isEmail()
        .withMessage("Wrong email format.")
        .escape(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({
                msg: "signup failed",
                errors: [...errors.array()],
            });
        } else {
            async.parallel(
                {
                    email: (cb) => {
                        User.findOne({ email: req.body.email }).exec(
                            (err, found) => {
                                if (err) cb(err);
                                if (found) cb(null, found.email);
                                else cb(null, false);
                            }
                        );
                    },
                    username: (cb) => {
                        User.findOne({ username: req.body.username }).exec(
                            (err, found) => {
                                if (err) cb(err);
                                if (found) cb(null, found.username);
                                else cb(null, false);
                            }
                        );
                    },
                },
                (err, result) => {
                    if (err) next(err);
                    let errors = [];
                    if (result.email) {
                        errors.push({
                            value: result.email,
                            msg: "email is already used",
                            param: "email",
                            location: "body",
                        });
                    }
                    if (result.username) {
                        errors.push({
                            value: result.username,
                            msg: "username is already used",
                            param: "username",
                            location: "body",
                        });
                    }
                    if (errors.length !== 0) {
                        res.status(400).json({ msg: "signup failed", errors });
                    } else {
                        bcrypt.hash(
                            req.body.password,
                            10,
                            (err, hashedPassword) => {
                                if (err) next(err);
                                new User({
                                    username: req.body.username,
                                    password: hashedPassword,
                                    email: req.body.email,
                                    admin: false,
                                }).save((err) => {
                                    if (err) next(err);
                                    res.status(200).json({
                                        msg: "signup succeeded",
                                    });
                                });
                            }
                        );
                    }
                }
            );
        }
    },
];
exports.login = [
    body("email")
        .exists()
        .isEmail()
        .withMessage("Wrong email format.")
        .escape(),
    body("password").escape(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({
                msg: "login failed",
                errors: [...errors.array()],
            });
        } else {
            User.findOne({ email: req.body.email }).exec((err, user) => {
                if (err) next(err);
                if (user) {
                    bcrypt.compare(
                        req.body.password,
                        user.password,
                        (err, result) => {
                            if (err) next(err);
                            if (result) {
                                const secret = process.env.SECRET;
                                const token = jwt.sign(
                                    { email: user.email },
                                    secret,
                                    {
                                        expiresIn: "30 days",
                                    }
                                );
                                return res.status(200).json({
                                    msg: "Auth Passed",
                                    token,
                                });
                            } else {
                                res.status(400).json({ msg: "Wrong password" });
                            }
                        }
                    );
                } else {
                    res.status(404).json({ msg: "user not found" });
                }
            });
        }
    },
];
exports.admin = [
    body("password").exists().trim().escape(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({
                msg: "admin login failed",
                errors: [...errors.array()],
            });
        } else if (req.body.password === process.env.ADMIN) {
            User.findByIdAndUpdate(req.user._id, { admin: true }, (err) => {
                if (err) next(err);
                req.user.admin = true;
                res.json({ msg: `${req.user.username} is an admin now.` });
            });
        } else {
            res.json({ msg: "Wrong admin password" });
        }
    },
];
