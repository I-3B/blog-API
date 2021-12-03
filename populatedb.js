require("dotenv").config();
const async = require("async");
const mongoose = require("mongoose");

const Post = require("./modules/Post");
const Comment = require("./modules/Comment");

//Set up default mongoose connection
const mongoDB = process.env.MONGO_DB;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

let Posts = [];
function createPost(title, content, published, publishedAt, cb) {
    new Post({
        title,
        content,
        published,
        publishedAt,
    }).save((err, post) => {
        if (err) cb(err);
        Posts.push(post);
        console.log(post);

        cb(null, post);
    });
}
function createComment(author, post, content, publishedAt, cb) {
    new Comment({ author, post, content, publishedAt }).save((err, comment) => {
        if (err) cb(err);

        console.log(comment);
        cb(null, comment);
    });
}
async.parallel(
    [
        (cb) => {
            createPost(
                "aaa",
                "lorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjkjlorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjkjlorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjkjlorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjk",
                true,
                Date.now(),
                cb
            );
        },
        (cb) => {
            createPost(
                "bbb",
                "lorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjkjlorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjkjlorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjkjlorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjk",

                true,
                Date.now(),
                cb
            );
        },
        (cb) => {
            createPost(
                "ccc",
                "lorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjkjlorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjkjlorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjkjlorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjk",

                true,
                Date.now(),
                cb
            );
        },
        (cb) => {
            createPost(
                "ddd",
                "lorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjkjlorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjkjlorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjkjlorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjk",

                true,
                Date.now(),
                cb
            );
        },
        (cb) => {
            createPost(
                "eee",
                "lorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjkjlorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjkjlorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjkjlorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjk",

                false,
                Date.now(),
                cb
            );
        },
        (cb) => {
            createPost(
                "fff",
                "lorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjkjlorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjkjlorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjkjlorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjk",

                true,
                Date.now(),
                cb
            );
        },
        (cb) => {
            createPost(
                "ggg",
                "lorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjkjlorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjkjlorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjkjlorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjklorem asdfa asdf asdfdkjcv ijasode aljd fasd fjaksld; fja;dafsl jasd fjk",

                false,
                Date.now(),
                cb
            );
        },
    ],
    (err) => {
        if (err) return console.error(err);
        console.log(Posts);
        async.parallel(
            [
                (cb) => {
                    createComment(
                        "dude A",
                        Posts[0]._id,
                        "sddfa daf asd f asd fd asd fasd ",
                        Date.now(),
                        cb
                    );
                },
                (cb) => {
                    createComment(
                        "dude B",
                        Posts[1]._id,
                        "sddfa daf asd f asd fd asd fasd ",
                        Date.now(),
                        cb
                    );
                },
                (cb) => {
                    createComment(
                        "dude C",
                        Posts[2]._id,
                        "sddfa daf asd f asd fd asd fasd ",
                        Date.now(),
                        cb
                    );
                },
                (cb) => {
                    createComment(
                        "dude D",
                        Posts[3]._id,
                        "sddfa daf asd f asd fd asd fasd ",
                        Date.now(),
                        cb
                    );
                },
                (cb) => {
                    createComment(
                        "dude E",
                        Posts[4]._id,
                        "sddfa daf asd f asd fd asd fasd ",
                        Date.now(),
                        cb
                    );
                },
                (cb) => {
                    createComment(
                        "dude F",
                        Posts[5]._id,
                        "sddfa daf asd f asd fd asd fasd ",
                        Date.now(),
                        cb
                    );
                },
                (cb) => {
                    createComment(
                        "dude G",
                        Posts[6]._id,
                        "sddfa daf asd f asd fd asd fasd ",
                        Date.now(),
                        cb
                    );
                },
                (cb) => {
                    createComment(
                        "dude A",
                        Posts[6]._id,
                        "sddfa daf asd f asd fd asd fasd ",
                        Date.now(),
                        cb
                    );
                },
                (cb) => {
                    createComment(
                        "dude B",
                        Posts[5]._id,
                        "sddfa daf asd f asd fd asd fasd ",
                        Date.now(),
                        cb
                    );
                },
                (cb) => {
                    createComment(
                        "dude C",
                        Posts[4]._id,
                        "sddfa daf asd f asd fd asd fasd ",
                        Date.now(),
                        cb
                    );
                },
                (cb) => {
                    createComment(
                        "dude D",
                        Posts[3]._id,
                        "sddfa daf asd f asd fd asd fasd ",
                        Date.now(),
                        cb
                    );
                },
                (cb) => {
                    createComment(
                        "dude E",
                        Posts[2]._id,
                        "sddfa daf asd f asd fd asd fasd ",
                        Date.now(),
                        cb
                    );
                },
                (cb) => {
                    createComment(
                        "dude F",
                        Posts[1]._id,
                        "sddfa daf asd f asd fd asd fasd ",
                        Date.now(),
                        cb
                    );
                },
                (cb) => {
                    createComment(
                        "dude G",
                        Posts[0]._id,
                        "sddfa daf asd f asd fd asd fasd ",
                        Date.now(),
                        cb
                    );
                },
            ],
            (err) => {
                if (err) return console.error(err);
                mongoose.connection.close();
            }
        );
    }
);
