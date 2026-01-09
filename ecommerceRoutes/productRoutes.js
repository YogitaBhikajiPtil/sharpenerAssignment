const express = require("express");
const router = express.Router();
const productController = require("../ecommerceController/productController");


router.get("/products",productController.getProducts)

router.post("/products",productController.postProducts)

router.get("/products/:id",productController.getProductsById)


module.exports = router;