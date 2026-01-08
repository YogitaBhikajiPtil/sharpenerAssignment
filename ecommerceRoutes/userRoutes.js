const express = require("express");
const router = express.Router();

router.get("/users",(req,res)=>{
    res.send(`Fetch all users.`);
})

router.post("/users",(req,res)=>{
    res.send(`Add a new user.`)
})

router.get("/users/:id",(req,res)=>{
    const userId = req.params.id;
    res.send(`userId is ${userId}`)
})


module.exports = router;