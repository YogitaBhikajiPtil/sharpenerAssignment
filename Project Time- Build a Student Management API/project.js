const express = require("express");
const app = express();

app.use(express.json())
const mysqlConnection = require("./mysqlConnection");
const studentRouter = require("./routes/studentRouter");

app.get("/test", (req, res) => {
  res.send("Server is reachable!");
});

app.use("/student",studentRouter)
app.listen(3000,()=>{
    console.log("server is listening 3000")
})
