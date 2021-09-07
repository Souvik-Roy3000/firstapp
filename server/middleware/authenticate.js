const jwt= require("jsonwebtoken");
const User=require("../schema/schema");

const authenticate= async(req,res,next)=>{
try {
    const token= req.cookies.jwtoken;
    const verifyToken= jwt.verify(token,process.env.PRIVATE_KEY);
    const rootUser= await User.findOne({_id:verifyToken._id, "tokens.token":token});


    if(!rootUser){ throw new Error("user not found")}
        req.token=token;
        req.rootUser=rootUser;
        req.userID=rootUser._id;
        next();
    
} catch (error) {
    res.status(401).send("unauthorized!!")
    console.log(error);
}
}






module.exports=authenticate;