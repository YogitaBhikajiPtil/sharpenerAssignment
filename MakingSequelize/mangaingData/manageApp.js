const express = require("express");
const db = require("./dbConnection")
const app = express();
const studentRoutes = require("./routes/studentRoutes");
const studentModel = require("./model/student")
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello world")
})


app.use("/students",studentRoutes)

 db.sync({force:true}).then(()=>{
    app.listen(3000,()=>{
    console.log("server is running")
    }) 
}).catch((err)=>{
    console.log(err);
})