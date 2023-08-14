const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "post" },
    comment: { type: String, max: 500 }
});

module.exports = mongoose.model("Comment", commentSchema);