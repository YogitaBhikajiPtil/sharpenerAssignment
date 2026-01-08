const express = require("express");

const router = express.Router();

router.use((req,res)=>{
    res.send(`Page not found`)
})

module.exports = router;