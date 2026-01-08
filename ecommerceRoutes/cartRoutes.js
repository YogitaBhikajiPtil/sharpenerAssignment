const express = require("express");
const router = express.Router();

router.get("/cart/:userId",(req,res)=>{
    res.send(`Fetch all users.`);
})

router.post("/cart/:userId",(req,res)=>{
    res.send(`Add a new user.`)
})




module.exports = router;