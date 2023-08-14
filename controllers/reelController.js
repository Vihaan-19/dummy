const Reel = require('../models/reelModel');

const create_reel =
    async (req, res) => {
            const newReel = new Reel(req.body);
            try {
                const savedReel = await newReel.save();
                res.status(200).json(savedReel);
            }
            catch (err) {
                res.status(501).json(err);
            }
        }

const get_reel =
    async (req, res) => {
        try {
            const reel = await Reel.findById(req.params.id);
            res.status(200).json(reel);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }

const likeDislike_reel =
    async (req, res) => {
        try {
            const reel = await Reel.findById(req.params.id);
            if (!reel.likes.includes(req.body.userId)) {
                await reel.updateOne({ $push: { likes: req.body.userId } });
                res.status(200).json("This reel has been liked");
            }
            else {
                await reel.updateOne({ $pull: { likes: req.body.userId } });
                res.status(200).json("The post has been disliked");
            }
        }
        catch (err) {
            res.status(500).json(err);
        }
    }

// const add_comment_reel =
//     async (req, res) => {

//     }

module.exports = { create_reel, get_reel, likeDislike_reel };