const express = require("express");

const router = express.Router();

const courses = [

{ id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

{ id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }

];


router.get("/courses",(req,res)=>{
    const courseNames = courses.map(course=>
        course.name).join(", ");
            res.send(`Courses: ${courseNames}`)
    })


router.get("/courses/:id",(req,res)=>{
    const id = Number(req.params.id);
    const course =courses.find(c=>
        c.id===id);

    if(!course){
       return res.send("Course not found")
    }

    res.send(`course:${course.name},Description:${course.description}`)
    
})

module.exports = router;