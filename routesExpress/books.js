const express = require("express");
const router = express.Router();

router.get("/books",(req,res)=>{
    console.log("fetching all books");
    res.send("<h1>Here is the list of books!</h1>")
})

router.post("/books",(req,res)=>{
    console.log("book data received",req.body);
    res.send("<h1>Book has been added!</h1>")
    
})

module.exports = router;