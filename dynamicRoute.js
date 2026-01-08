const express = require("express");
const app = express();

app.get("/welcome/:username",(req,res)=>{
    const username = req.params.username;
    const role = req.query.role;
    res.send(`welcome ${username} your role is ${role}`)
})

app.listen(5000,()=>{
    console.log("server is listening");
})

