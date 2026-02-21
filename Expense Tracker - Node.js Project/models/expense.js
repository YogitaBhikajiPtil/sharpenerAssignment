const { DataTypes } = require("sequelize");
const sequelize = require("../dbConnection");


  const Expense = sequelize.define("Expense", {
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

 

module.exports= Expense;