const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    reelId: { type: mongoose.Schema.Types.ObjectId, ref: "reel" },
    comment: { type: String, max: 500 }
});

module.exports = mongoose.model("ReelComment", commentSchema);