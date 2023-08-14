//Creating a router 
const express = require('express')
const router = express.Router();
const reelController = require('../controllers/reelController');

//create a reel
router.post('/', reelController.create_reel);

//get a reel
router.get('/:id', reelController.get_reel);

//like / dislike a reel
router.put('/:id/like', reelController.likeDislike_reel);

module.exports = router;
