import jwt from "jsonwebtoken"

const genToken= (userId)=>{   //removed async from here also
try {
    let token= jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn:"7d"})  //removed await from here token = await jwt.sign
    return token
} catch (error) {
    console.log(error);
}
}

export default genToken