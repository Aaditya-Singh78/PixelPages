const express = require("express");
const cors = require("cors");
const app = express();

// internal variables 
const {port, db, uri} = require("./private/config");
const {user, post} = require("./models/schema");

// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//     allowedHeaders: ["content-type"]
// }));
app.use(express.json());

app.get("/posts/:authorId", async (req,res)=>{
    try{
        const {authorId} = req.params;

        const posts = await post.findById({authorId});
        return res.status(200).json({
            count: posts.length,
            data: posts
        }); 
       }catch(err){
        console.log(err.message);
        res.status(500).send({message: err.message});
       }
});

// unknown?
app.get("/posts", async (req,res)=>{
   try{
    const posts = await post.find({});
    return res.status(200).json({
        count: posts.length,
        data: posts
    }); 
   }catch(err){
    console.log(err.message);
    res.status(500).send({message: err.message});
   }
});

// unknown?
app.post("/posts",async (req,res)=>{
    try {
        if(!req.body.title || req.body.content){
            return res.status(400).send({
                message: "fill out all required fields"
            });
        }
        const newPost = await post.create(newPost);
    } catch (err) {
        console.log(err.message);
        res.status(500).send({message: err.message})
    }
});

// check a user is present or not || important**
app.post("/login", async (req,res)=>{
    try {
        if(!req.body.email || req.body.password){
            return res.status(400).send({
                message: "fill out all required fields"
            });
        }
        const logUser = await user.find(logUser);
        // move to homepage
        return res.status(200).redirect("https://www.google.com");
    } catch (err) {
        console.log(err.message);
        res.status(500).send({message: err.message})
    }
});

app.post("/signUp", async (req,res)=>{
    try {
        if(!req.body.email || req.body.password){
            return res.status(400).send({
                message: "fill out all required fields"
            });
        }
        const newUser = await user.create(newUser);
    } catch (err) {
        console.log(err.message);
        res.status(500).send({message: err.message})
    }
});

db.connect(uri)
.then(()=>{
    console.log("Database connected Successfully!");
    app.listen(port, (req,res)=>{
        console.log(`Pixelpages::server listening on - ${port}`);
    })
}).catch((err)=>{
    console.log(err);
});