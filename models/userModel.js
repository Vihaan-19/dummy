const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    //Add Profile Picture
    image: {
        type: String,
        default: "/public/images/default_user.png"
    },

    username: {
        type: String,
        required: true,
        min: 3,
        max: 25,
        default: null
    },

    email: {
        type: String,
        required: true,
        //Email Verification
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please provide valid email'],
        unique: true
    },

    password: {
        type: String,
        required: true,
        min: 4,
        default: null
    },

    followers: {
        type: Array,
        default: []
    },

    following: {
        type: Array,
        default: []
    },

    bio: {
        type: String,
        max: 60,
        default: null
    },

    token: {
        type: String,
        default: null
    }
},
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);