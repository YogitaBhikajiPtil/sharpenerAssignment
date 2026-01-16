const express = require("express");
const app = express();

app.use(express.json())
const mysqlConnection = require("./mysqlConnection");
const studentRouter = require("./routes/studentRouter");

app.use("/student",studentRouter)
app.listen(8080,()=>{
    console.log("server is listening 8080")
})
