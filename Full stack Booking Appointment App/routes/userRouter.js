const express = require("express");
const router = express.Router();

const userController = require("../controller/userController")
router.post("/insertUser",userController.insertUser);
router.get("/getUser",userController.getUser);
router.delete("/deleteUser/:id",userController.deleteUser)

module.exports = router;