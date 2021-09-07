const mongoose= require("mongoose");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const userSchema= new mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
company_name:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
cpassword:{
    type:String,
    required:true
},
tokens:[
    {
        token:{
            type:String,
            required:true 
        }
    }
]
});


userSchema.pre("save", async function(next){
    console.log("hi from schema");
if(this.isModified("password")){
    console.log("hi from pre password");
    this.password=await bcrypt.hash(this.password,10);
    this.cpassword=await bcrypt.hash(this.cpassword,10);
}
next();
})

// generating auth token
userSchema.methods.generateAuthToken=async function(){
    try {
        let token= jwt.sign({_id:this._id}, process.env.PRIVATE_KEY);
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}

const User= mongoose.model("USER",userSchema);

module.exports=User;