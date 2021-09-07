const express=require("express");
const app=express();
const mongoose= require("mongoose");
const dotenv=require("dotenv");
dotenv.config({path:"./config.env"});
require("./db/connection");
// const User= require("./schema/schema");
app.use(express.json());
app.use(require("./router/auth"));
const DB=process.env.DATABASE;
const PORT=process.env.PORT;



// const middleware=(req,res,next)=>{
//     console.log(`hello from middleware`);
//     next();
// }

app.get("/", (req,res)=>{
res.send("hello from the server");
});
// app.get("/about",middleware, (req,res)=>{
//     res.send("hello from the about server");
//     });
app.get("/contact", (req,res)=>{
   res.send("hello from the contact server");
   });


app.listen(3000, ()=>{
    console.log(`connected to server ${PORT}`);
});