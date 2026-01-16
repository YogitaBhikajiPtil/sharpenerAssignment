const express = require("express");
const app = express();
const databaseConnection = require("./dataBaseConnection");
const busRouter = require("./routes/busRoutes")
const userRouter = require("./routes/userRoutes")

app.use(express.json());

app.use("/buses",busRouter);
app.use("/user",userRouter);


app.listen(4000,(req,res)=>{
    console.log("hello world")
})

