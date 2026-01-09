const express = require("express");
const router = express.Router();
const cartController = require("../ecommerceController/cartController");

router.get("/cart/:id",cartController.getCartById)

router.post("/cart/:id",cartController.postCartById)




module.exports = router;