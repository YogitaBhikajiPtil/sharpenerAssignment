const express = require("express");
const app = express();


console.log("App file executed");
const productRoutes = require("./routes/productRoutes")
app.use(productRoutes)

app.listen(5000,()=>{
    console.log("server is listening");
})