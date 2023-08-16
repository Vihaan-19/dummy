//Creating a router 
const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');


//For image------------------------->
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => { cb(null, './public/images') },
    //Added filenames using date for unique name
    filename: (req, file, cb) => { cb(null, Date.now() + path.extname(file.originalname)) }
})

const upload = multer({ storage: storage });
//For image------------------------->


// get user
router.get('/', auth, userController.get_user);

//Pass id of user to delete
//delete image-------------------------------------------------------------------------
router.delete('/:id/delete', auth, userController.delete_user);

// follow and unfollow user
//Pass id of user to unfollow
router.put('/:id/follow', auth, userController.follow_user);
router.put('/:id/unfollow', auth, userController.unfollow_user);

// update user
router.put('/:id/update',upload.single('image'), auth, userController.update_user);



module.exports = router;