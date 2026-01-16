const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController")

router.post("/students",studentController.addStudents);
router.get("/getStudents",studentController.getStudents);
router.get("/getStudentsById/:id",studentController.getStudentsById)
router.put("/updateStudent/:id",studentController.updateStudentsById)
router.delete("/deleteStudent/:id",studentController.deleteStudent)
module.exports = router;

