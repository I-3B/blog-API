if (!process.env.NODE_ENV) require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
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
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "build")));
app.use(passport.initialize());
app.get("/api/", (req, res) => {
    res.sendStatus(200);
});
app.use("/api/user", passport.authenticate("jwt", { session: false }), userRouter);
app.use("/api/auth", authRouter);
app.use("/api/posts", postsRouter);
app.use("/api/admin", passport.authenticate("jwt", { session: false }), adminRouter);
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});
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
