const express = require("express");

const app = express();
const productRouter = require("./route/productRouter")

app.use(productRouter)
app.listen(3000,()=>{
    console.log("server is listening");
})

