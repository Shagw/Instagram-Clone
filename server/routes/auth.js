const express = require('express');
const mongoose = require('mongoose');
const bycrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET}  =require('../keys')
const requiredLogin = require('../middlleware/requiredLogin');


const User = mongoose.model("User")

const router = express.Router();

router.get('/',requiredLogin,(req,res)=>{
    res.send("Hello World 123!")
})

router.get('/protected',(req,res)=>{
    res.send("Hello User!")
})

router.post('/signup',(req,res)=>{
    const {name,email,password} = req.body;
    if(!email || !password || !name){
       return res.status(422).json({error:"Please add all the fields!!"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"User already exists with that email!!"})
        }
        bycrypt.hash(password,12)
        .then(hashedpassword=>{
            const user = new User({
                email,
                password:hashedpassword,
                name
            })
            user.save()
            .then(user=>{
                res.json({message:"Saved Successfully"})
            })
            .catch(err=>{
                console.log(err)
            })  
        })
    })
    .catch(err=>{
        console.log(err);
    })
})


router.post('/signin',(req,res)=>{
    const {email,password}  =req.body;
    if(!email || !password){
        return res.status(422).json({error:'Invalid Email or Password!'})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({error:'Invalid Email or Password!'})
        }
        bycrypt.compare(password,savedUser.password)
        .then(domatch=>{
            if(domatch){
                    const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                    res.json({token})
            }
            else{
                return res.status(422).json({error:"Invalid Email or Password!"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})
module.exports = router