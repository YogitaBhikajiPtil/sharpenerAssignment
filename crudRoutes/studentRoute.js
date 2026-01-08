const express = require("express");

const router = express.Router();

const students = [

{ id: 1, name: "Alice" },

{ id: 2, name: "Bob" },

{ id: 3, name: "Charlie" }

];

router.get("/students",(req,res)=>{
    const studentNames = students.map(s=>s.name).join(",")
    res.send(`Students: ${studentNames}`)
});

router.get("/students/:id",(req,res)=>{
    const id = parseInt(req.params.id);
   
    const student = students.find(s=>
        s.id === id
    )
    if(!student){
       return res.send("student not found")
    }
   res.send(`Student:${student.name}`)
})
module.exports = router;