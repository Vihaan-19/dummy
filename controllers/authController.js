const express = require('express');
const router = express.Router();
const user = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
express().use(cookieParser);

router.use(express.json());

//This file will export the signup and login function to authRoutes
const signup_get =
    (req, res) => {
        res.send('User Signup Page');
    }

const login_get =
    (req, res) => {
        res.send('User Login Page')
    }


const signup_post =
    async (req, res) => {

        try {
            //getting data from the body
            const { name, username, email, password } = req.body;

            //all data is required required*
            if (!name || !username || !email || !password)
                res.status(400).send('All fields are required');


            //verify if user already exists
            //database query
            const checkExistingUser = await user.findOne({ email });
            if (checkExistingUser)
                res.status(400).send('User Already Exists');


            //encrypt password 
            const hashedPassword = await bcrypt.hash(password, 10);

            //Create New User
            const newUser = await user.create({
                name,
                username,
                email,
                password: hashedPassword
            })

            //generate token
            const token = jwt.sign({ id: newUser._id }, 'shhhh', { expiresIn: "2h" });
            //Adding token to user
            newUser.token = token;
            //Setting password to undefined
            newUser.password = undefined;

            res.status(200).json(newUser);
        }

        catch (err) {
            console.log(err);
        }
    }



const login_post =
    async (req, res) => {
        try {
            //getting data from body
            const { email, password } = req.body;
            if (!email || !password)
                res.status(400).send('All fields required');
            //check if user exists in database
            const loggedInUser = await user.findOne({ email })

            //verify the entered password from the user.password
            if (loggedInUser && (await bcrypt.compare(password, loggedInUser.password))) {
                //if verified, create and send a token
                const token = jwt.sign({ loggedInUser: loggedInUser._id }, 'shhhh', { expiresIn: "2h" });
                loggedInUser.token = token;
                loggedInUser.password = undefined;

                //send token to user cookie
                const options = {
                    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                    //Only server can manipulate this cookie
                    httpOnly: true
                }
                res.status(200).cookie("token", token, options).json({
                    success: true,
                    token,
                    loggedInUser
                })
            }

            else if (!loggedInUser)
                res.status(401).send('Please Sign in first');

            else
                res.status(402).send('Wrong Password');
        }

        catch (err) {
            console.log(err);
        }
    }

module.exports = { signup_get, login_get, signup_post, login_post }