const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Post = new Schema({
    title: String,
    content: String,
    published: Boolean,
    publishedAt: Date,
});
module.exports = mongoose.model("Post", Post);
