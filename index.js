const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("<h1>Hello World ! ");
})

app.listen(3000,()=>{
    console.log("Server is running on aws port : 3000")
})
