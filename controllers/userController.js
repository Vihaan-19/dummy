const User = require('../models/userModel');

//Add change password feature
//Add Feature to change description

//get a user
const get_user =
    async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            const { password, updatedAt, ...other } = user._doc;
            res.status(200).json(other);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }


//delete user
const delete_user =
    async (req, res) => {
        if (req.body.userId === req.params.id) {
            try {
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("Account has been deleted");
            }
            catch (err) {
                return res.status(500).json(err);
            }
        }
        else
            return res.status(403).json("You can delete only your account!");
    }


//follow a user
const follow_user =
    async (req, res) => {

        //When user to follow is not same as current user 
        if (req.body.userId !== req.params.id) {
            try {
                const userToFollow = await User.findById(req.params.id);
                const currentUser = await User.findById(req.body.userId);

                //Check already following
                if (!userToFollow.followers.includes(req.body.userId)) {
                    //Add user to following list
                    await userToFollow.updateOne({ $push: { followers: req.body.userId } });
                    await currentUser.updateOne({ $push: { following: req.params.id } });
                    res.status(200).json("user has been followed");
                }

                else
                    res.status(403).json("you already follow this user");
            }

            catch (err) {
                console.log(err);
                res.status(500).json(err);
            }
        }

        //When same user
        else
            res.status(403).json("you cant follow yourself");

    }


//unfollow a user
const unfollow_user =
    async (req, res) => {

        //When user to unfollow is not same as current user
        if (req.body.userId !== req.params.id) {
            try {
                const userToUnfollow = await User.findById(req.params.id);
                const currentUser = await User.findById(req.body.userId);

                if (userToUnfollow.followers.includes(req.body.userId)) {
                    await userToUnfollow.updateOne({ $pull: { followers: req.body.userId } });
                    await currentUser.updateOne({ $pull: { following: req.params.id } });
                    res.status(200).json("user has been unfollowed");
                }

                else
                    res.status(403).json("you dont already follow this user");

            }
            catch (err) {
                res.status(500).json(err);
            }
        }

        else
            res.status(403).json("you cant unfollow yourself");

    }


module.exports = { get_user, delete_user, follow_user, unfollow_user };