const express = require('express');
const router = express.Router();
const reelCommentController = require("../controllers/reelCommentController");

//router.post("/", authController.verify, commentController.addComment);
router.post('/:id', reelCommentController.add_comment_reel);
// router.get("/:id", commentController.get_post);

module.exports = router;