const Expense = require("../models/expense");

// Add Expense
const addExpense = async (req, res) => {
  try {
    const { amount, description, category } = req.body;

    const expense = await Expense.create({
      amount,
      description,
      category
    });
  
    res.status(201).json(expense);
  } catch (err) {
    console.log("FULL ERROR:", err); 
    res.status(500).json({ message: "Error adding expense" ,error: err.message });
  }
};

// Get All Expenses
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.json(expenses);
  } catch (err) {
    console.log("FETCH ERROR:", err);   // 👈 ADD THIS
    res.status(500).json({
      message: "Error fetching expenses",
      error: err.message
    });
  }
};

module.exports={
  addExpense,
  getExpenses
}

