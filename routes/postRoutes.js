//Creating a router 
const express = require('express')
const router = express.Router();
const postController = require('../controllers/postController');

//create a post
router.post('/', postController.create_post);

//update a post, /:id of post
router.put('/:id', postController.update_post);

//delete a post, /:id of post
router.delete('/:id', postController.delete_post);

//get a post, /:id of post
router.get('/:id', postController.get_post);

//like / dislike a post, /:id of post
router.put('/:id/like', postController.likeDislike_post);

//get timeline posts, /:id of post
router.get('/timeline/all', postController.get_all_posts);

module.exports = router;
