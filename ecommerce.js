const express = require("express");
const app = express();

const userRouter=require("./ecommerceRoutes/userRoutes");
const cartRouter = require("./ecommerceRoutes/cartRoutes");
const productRouter = require("./ecommerceRoutes/productRoutes");

app.use(userRouter);
app.use(cartRouter);
app.use(productRouter);

app.listen(3000,()=>{
    console.log("server is listening")
})