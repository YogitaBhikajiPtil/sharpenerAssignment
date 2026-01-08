const express = require("express");
const app = express();

app.get("/orderList",(req,res)=>{
    res.send("<h1>Here is the list of orders</h1>")
})

app.post("/createOrder",(req,res)=>{
    res.send("<h1>Here is the list of orders</h1>")
})

app.get("/userList",(req,res)=>{
    res.send("<h1>Here is the list of users</h1>")
})

app.post("/createUser",(req,res)=>{
    res.send("<h1>Anew has been added</h1>")
})



app.listen(3000,()=>{
    console.log("server is listening")
})