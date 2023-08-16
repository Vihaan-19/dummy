const mongoose = require("mongoose");

const reelSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        max: 100,
    },

    video: {
        type: String,
        required:true
    },

    likes: {
        type: Array,
        default: [],
    },

    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "reelCommentModel"
    }]
},
    { timestamps: true })

module.exports = mongoose.model("Reel", reelSchema);