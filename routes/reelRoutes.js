//Creating a router 
const express = require('express')
const router = express.Router();
const reelController = require('../controllers/reelController');
const auth = require('../middlewares/auth');


//For reels------------------------->
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => { cb(null, './public/videos') },
    //Added filenames using date for unique name
    filename: (req, file, cb) => { cb(null, Date.now() + path.extname(file.originalname)) }
})

const upload = multer({ storage: storage });
//For reels------------------------->


//create a reel
router.post('/', upload.single('video'), auth, reelController.create_reel);

//show all reels
router.get('/', reelController.get_all_reels);

//get a reel
router.get('/:id', reelController.get_reel);

//like / dislike a reel
router.put('/:id/like', auth, reelController.likeDislike_reel);

module.exports = router;
