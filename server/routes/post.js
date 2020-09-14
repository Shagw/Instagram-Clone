const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const requiredLogin = require('../middlleware/requiredLogin');
const Post = mongoose.model("Post")

router.get('/allposts',(req,res)=>{
    Post.find()
    .populate("postedby","_id name")
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post("/createpost",requiredLogin,(req,res)=>{
    const {title,body}=req.body
    if(!title || !body){
        return res.status(422).json({errpr:"Please add all fields!!"})
    }
    const post = new Post({
        title,
        body,
        postedby:req.user
    })
    post.save()
    .then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/myposts',requiredLogin,(req,res)=>{
    Post.find({postedby:req.user._id})
    .populate("postedby","name _id")
    .then(mypost =>{
        res.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router