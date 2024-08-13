const bcrypt = require("bcryptjs/dist/bcrypt")
const User = require("../models/userModel")
const jwt=require("jsonwebtoken")

exports.signup=async(req,res)=>{
    try {
        const {username,email,password}=req.body
        const user=await User.findOne({email})
        if(user){
            return res.status(400).json("user already exist!")
        }
        const newPass=await bcrypt.hash(password,10)
        const newUser=new User({
            username,
            email,
            password:newPass
        })
        await newUser.save()
        res.status(201).json("user created succesfully")
    } catch (error) {
        console.log(error)
    }
}

exports.login=async(req,res)=>{
    try {
        const {email,password}=req.body
        const user=await User.findOne({email})
        if(!user){
            return res.status(400).json("User doesn't exist")
        }
        const crt=await bcrypt.compare(password,user.password)
        if(!crt){
            return res.status(400).json("Incorrect password")
        }
        const token=await jwt.sign({user_id:user._id,username:user.username},"secret",{
            expiresIn:"1h"
        })
        return res.status(200).json(token)
    } catch (error) {
        console.log(error)
    }
}