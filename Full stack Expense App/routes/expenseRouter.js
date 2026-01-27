const express = require("express");
const router = express.Router();
const expenseController = require("../controller/expenseController")

router.get("/getExpenses",expenseController.getExpense);
router.post("/addExpense",expenseController.addExpense);
router.put("/editExpense/:id",expenseController.editExpense);
router.delete("/deleteExpense/:id",expenseController.deleteExpense);

module.exports = router;