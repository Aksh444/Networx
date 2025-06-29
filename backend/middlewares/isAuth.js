import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

const isAuth =async (req,res,next)=>{
    try {
        let {token} = req.cookies
        if(!token){
            return res.status(400).json({message:"user doesn't have token"})
        }
        let verifyToken= jwt.verify(token,process.env.JWT_SECRET)  // console.log(verifyToken);
        if(!verifyToken){
            return res.status(400).json({message:"user doesn't have valid token"})
        }
        
        req.userId=verifyToken.userId       
        next()                                    // console.log("Verified userId:", verifyToken.userId);
                                                           
    } catch (error) {
        return res.status(500).json({message:"isAuth error"})
    }
}

export default isAuth 