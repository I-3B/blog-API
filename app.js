if (!process.env.NODE_ENV) require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const passport = require("passport");
const jwtStrategy = require("./strategies/jwt.js");
const userRouter = require("./routes/userRouter");
const authRouter = require("./routes/authRouter");
const postsRouter = require("./routes/postsRouter");
const adminRouter = require("./routes/adminRouter");
mongoose.connect(process.env.MONGO_DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

passport.use(jwtStrategy);
const app = express();

// view engine setup
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(passport.initialize());
app.use(
    "/user",
    passport.authenticate("jwt", { session: false }),

    userRouter
);
app.use("/auth", authRouter);
app.use("/posts", postsRouter);
app.use(
    "/admin",
    passport.authenticate("jwt", { session: false }),
    adminRouter
);
// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json(err);
});

module.exports = app;
