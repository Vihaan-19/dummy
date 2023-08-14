//Using dotenv file to hide mongodb credentials
//Using helmet for security
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const helmet = require('helmet');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const reelRoutes = require('./routes/reelRoutes');
const reelCommentRoutes=require('./routes/reelCommentRoutes');

const PORT = 3000;

dotenv.config();

//Adding helmet for security of api
app.use(helmet());

//Connected to Mongoose database and server
mongoose.connect(process.env.mongo_uri, { useUnifiedTopology: true })
    .then((result) => {
        app.listen(PORT, () => { console.log(`Connected to server ${PORT} and database `) });
    })
    .catch((err) => { console.log(err) });


//Setting up Middle-Ware 
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/posts/comments", commentRoutes);
app.use("/api/reels", reelRoutes);
app.use("/api/reels/comments",reelCommentRoutes)

app.get('/', (req, res) => {
    res.send("Welcome to Home Page");
})



