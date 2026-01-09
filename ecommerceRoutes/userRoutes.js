const express = require("express");
const router = express.Router();
const userController = require("../ecommerceController/userController");

router.get("/users",userController.getUser)

router.post("/users",userController.postUser)

router.get("/users/:id",userController.getUserById)


module.exports = router;