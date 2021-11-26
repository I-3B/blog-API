const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Comment = new Schema({
    author: String,
    post: Schema.Types.ObjectId,
    content: String,
    publishedAt: Date,
});
module.exports = mongoose.model("Comment", Comment);
