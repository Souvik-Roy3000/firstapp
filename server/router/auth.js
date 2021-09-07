const express=require("express");
const router= express.Router();
const bcrypt= require("bcryptjs");
const jwt=require("jsonwebtoken");
const authenticate=require("../middleware/authenticate");
const User=require("../schema/schema");
require("../db/connection");
router.get("/", (req,res)=>{
    res.send("hello from the server authjs");
    });

    router.post("/register",async (req,res)=>{
        const {name,email,company_name,password,cpassword}=req.body;
        if(!name || !email || !company_name || !password || !cpassword){
            return res.status(422).json({error:"please fill the form correctly"});
        }
    try {
        const userExist=await User.findOne({email:email});
        if(userExist){
            return res.status(422).json({error:"email already exist"});
        }
        else if(password!=cpassword){
            return res.status(422).json({error:"password is not matching"});
        }
        else{
            const user= new User({name,email,company_name,password,cpassword});
            await user.save();
    
            res.status(201).json({message:"user registered successfully"});
        }
       
    } catch (error) {
        console.log(error);
    }
        // console.log(req.body);
        // res.json({message:req.body});
    });

// login route

router.post("/login", async(req,res)=>{
    try {
        const  {email, password}=req.body;
        if(!email || !password){
           return res.status(422).json({error:"please fill the form"})
        }
           const userLogin= await User.findOne({email:email})


if(userLogin){
    const isMatch= await bcrypt.compare(password, userLogin.password);
    const token=await userLogin.generateAuthToken();
console.log(token);
res.cookie("jwtoken",token,{
    expires:new Date(Date.now() + 25900000000 ),
    httpOnly:true
});

    if (!isMatch) {
        res.status(400).json({message:"login pass credentials error"})
    }else{
     res.status(200).json({message:"login successful"}) 
    }
}else{
    res.status(400).json({message:"login credentials error"});
}

           
    } catch (error) {
        console.log(error);
    }
});

// about us page
router.get("/about",authenticate, (req,res)=>{
        res.send(req.rootUser);
        });
router.get("/getdata",authenticate, (req,res)=>{
    res.send(req.rootUser);
    });
module.exports=router;