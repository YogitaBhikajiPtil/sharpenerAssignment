const express = require("express");
const app = express();

app.use((req,res,next)=>{
    console.log("Authentication middleware called.")
    next();
})

app.use("/library-2",(req,res,next)=>{
    console.log("book recommendation");
    next();
})

app.use("/library-3",(req,res,next)=>{
    console.log("special access to research paper from professors and seniors")
    next();
})

app.get("/library-2",(req,res)=>{
    res.send("library 2 Entered")
    
})

app.get("/library-3",(req,res)=>{
    res.send("<h1>library -3 Entered</h1>")
})

app.listen(3201,()=>{
    console.log("server is listening")
})

