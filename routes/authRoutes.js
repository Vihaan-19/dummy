//All the Authorization Routes are here
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


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


//Sign Up and Login System
router.get('/signup', authController.signup_get);

router.post('/signup', upload.single('profilePic'), authController.signup_post);

router.get('/login', authController.login_get);

router.post('/login', authController.login_post);

module.exports = router;


