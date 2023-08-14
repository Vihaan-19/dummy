//Creating a router 
const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController');

// update user
router.delete('/:id', userController.delete_user);

// get user
router.get('/:id', userController.get_user);

// follow and unfollow user
router.put('/:id/follow', userController.follow_user);
router.put('/:id/unfollow', userController.unfollow_user);


module.exports = router;