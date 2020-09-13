const e = require('express');
const express = require('express');
const mongoose = require('mongoose');
const bycrypt = require('bcryptjs')

const User = mongoose.model("User")

const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Hello World 123!")
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
                res.json({message:"Successfully signed in!"})
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