const jwt=require('jsonwebtoken')
const user=require('../models/user')
const protect=async (req,res,next)=>{
    let token;
    const authHeader=req.headers.authorization;

    if(authHeader && authHeader.startsWith('Bearer')){
        token=authHeader.split(' ')[1]

        try {
            const decoded=jwt.verify(token,process.env.JWT_SECRET)
            req.user=await user.findById(decoded.id).select('-password')
            next()
        } catch (error) {
            return res.status(401).json({message:"Invalid tiken"})
        }
    }
    else{
        return res.status(401).json({message:"No Token found"})
    }
}

module.exports=protect;