const userSchema=require('../models/user')
const {validationResult}=require('express-validator')
const generateToken=require('../utils/generateToken')

//Register code

exports.registerUser=async(req,res)=>{
    const error= validationResult(req);
    if(!error.isEmpty())
        return res.status(400).json({error:error.array()})
    const{name,email,password,role}=req.body;
    try {
        const existing=await userSchema.findOne({email});
        if(existing) return res.status(400).json({message:"Email Already exists"});
        const user= await userSchema.create({name,email,password,role});
        res.status(201).json({
            id:user._id,
            name:user.name,
            email:user.email,
            role:user.role
        })
    } catch (error) {
        res.status(500).json({message:error.message})
        // console.log(error)
    }
}

//Login code

exports.loginUser=async(req,res)=>{
    const{email,password,role}=req.body;
    try {
        const user=await userSchema.findOne({email});
        if(!user) return res.status(401).json({message:"Invalid user"});
        const ismatch=await user.matchPassword(password);
        
        if(!ismatch)
            return res.status(404).json({message:"Invalid Credentail"});
        res.json({
            message: "Login Successful ✅",
            _id:user._id,
            name:user.name,
            email:user.email,
            role:user.role,
            token:generateToken(user._id)
        })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}