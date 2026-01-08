const express = require("express");
const router = express.Router();

router.get("/products",(req,res)=>{
    res.send(`Fetch all products.`);
})

router.post("/products",(req,res)=>{
    res.send(`Add a new product.`)
})

router.get("/products/:id",(req,res)=>{
    const productId = req.params.id;
    res.send(`userId is ${productId}`)
})


module.exports = router;