const express = require("express");
const app = express();
const databaseConnection = require("./dataBaseConnection");
const userRouter = require("./routes/userRouter")
const bodyParser = require("body-parser");
const cors = require('cors')
 app.use(express.json());
const path = require("path");

app.use(cors())

//app.use(bodyParser.json({extended:false}));
app.use(express.static(path.join(__dirname, "public")));

app.use("/booking",userRouter);

// Every restart → table recreated → data lost. this is for force:true
 databaseConnection.sync({force:false}).then(()=>{
    app.listen(8080,()=>{
    console.log("server is running on port 8080")
    }) 
}).catch((err)=>{
    console.log(err);
})