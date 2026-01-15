const express = require("express");
const db = require("./dbConnection")
const app = express();
const studentRoutes = require("./routes/studentRoutes");

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.use("/students",studentRoutes)

app.listen(3000,()=>{
    console.log("server is running")
})  