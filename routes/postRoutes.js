//Creating a router 
const express = require('express')
const router = express.Router();
const postController = require('../controllers/postController');
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


//create a post
router.post('/', auth, upload.single('image'), postController.create_post);

//update a post, /:id of post
router.put('/:id', auth, upload.single('image'), postController.update_post);

//delete a post, /:id of post
//Add delete image feature-------------------------------------------------------------------------
//Check
router.delete('/:id', auth, postController.delete_post);

//get a post, /:id of post
router.get('/:id', postController.get_post);

//like / dislike a post, /:id of post
router.put('/:id/like', auth, postController.likeDislike_post);

//get post by category
router.get('/', postController.get_category_post);

//get timeline posts, /:id of post
router.get('/timeline/all', postController.get_all_posts);


module.exports = router;
