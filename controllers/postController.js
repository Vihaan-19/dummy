const Post = require("../models/postModel");
const User = require("../models/userModel");
const Comment = require("../models/commentModel");

const create_post =
    async (req, res) => {
        const newPost = new Post(req.body);
        try {
            const savedPost = await newPost.save();
            res.status(200).json(savedPost);
        }
        catch (err) {
            res.status(501).json(err);
        }
    }

const update_post =
    async (req, res) => {
        try {
            const post = await Post.findById(req.params.id);
            if (post.userId === req.body.userId) {
                await post.updateOne({ $set: req.body });
                res.status(200).json("post has been updated");
            }
            else
                res.status(403).json("you can update only your post");

        }

        catch (err) {
            res.status(500).json(err);
        }
    }

const delete_post =
    async (req, res) => {
        try {
            const post = await Post.findById(req.params.id);
            //The current user can only delete his/her post
            if (post.userId === req.body.userId) {

                //Deleting all comments associated with the post
                await Comment.deleteMany({ postId: post._id });
                //Deleting the post
                await post.deleteOne();

                res.status(200).json("the post has been deleted");
            }
            else
                res.status(403).json("you can delete only your post");

        }
        catch (err) {
            res.status(500).json(err);
        }
    }

const get_post =
    async (req, res) => {
        try {
            const post = await Post.findById(req.params.id);
            res.status(200).json(post);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }

const likeDislike_post =
    async (req, res) => {
        try {
            const post = await Post.findById(req.params.id);
            if (!post.likes.includes(req.body.userId)) {
                await post.updateOne({ $push: { likes: req.body.userId } });
                res.status(200).json("The post has been liked");
            }
            else {
                await post.updateOne({ $pull: { likes: req.body.userId } });
                res.status(200).json("The post has been disliked");
            }
        }
        catch (err) {
            res.status(500).json(err);
        }
    }

//All Posts of an User
// IMPORTANT:- Add Pagination
const get_all_posts =
    async (req, res) => {
        try {
            const currentUser = await User.findById(req.body.userId);
            const userPosts = await Post.find({ userId: currentUser._id });
            const friendPosts = await Promise.all(
                currentUser.following.map((friendId) => {
                    return Post.find({ userId: friendId });
                })
            );
            res.json(userPosts.concat(...friendPosts))
        }
        catch (err) {
            res.status(500).json(err);
        }
    }

module.exports = { create_post, update_post, delete_post, get_post, likeDislike_post, get_all_posts }