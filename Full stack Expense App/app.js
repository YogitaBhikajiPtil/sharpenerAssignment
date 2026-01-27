const express = require("express");
const app = express();
const dbConnection = require("./dbConnection");
const expenseRouter = require("./routes/expenseRouter")
const cors = require('cors')
app.use(express.json());
const path = require("path");

app.use(cors())

//app.use(bodyParser.json({extended:false}));
app.use(express.static(path.join(__dirname, "public")));

app.use("/expense",expenseRouter);

// Every restart → table recreated → data lost. this is for force:true
 dbConnection.sync({force:false}).then(()=>{
    app.listen(8080,()=>{
    console.log("server is running on port 8080")
    }) 
}).catch((err)=>{
    console.log(err);
})

