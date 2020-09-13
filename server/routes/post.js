const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bycrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const requiredLogin = require('../middlleware/requiredLogin');
const Post = mongoose.model("Post")

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

module.exports = router