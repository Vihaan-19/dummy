const express = require('express');
const router = express.Router();
const commentController = require("../controllers/commentController");

//router.post("/", authController.verify, commentController.addComment);
router.post('/:id', commentController.add_comment);
// router.get("/:id", commentController.get_post);

module.exports = router;