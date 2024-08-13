const jwt=require('jsonwebtoken')

const auth=async(req,res,next)=>{
    try {
        
        const token=req.header('Authorization').split(" ")[1]
        if(!token){
            return res.status(400).json({messgae:"token doesn't exist so not allowed"})
        }
        const decoded=await jwt.verify(token,"secret")
        req.user=decoded
        next()
    } catch (error) {
        res.status(500).json("No verification Token Exist")
    }
}

module.exports=auth