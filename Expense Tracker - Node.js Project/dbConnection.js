const { Sequelize } = require("sequelize");

// Create connection
const sequelize = new Sequelize("testdb","root","Yogita@0303",{
    host :"localhost",
    dialect :"mysql"
});

// Check connection
sequelize.authenticate()
  .then(() => console.log("Database Connected Successfully"))
  .catch(err => console.log("Error: " + err));

module.exports = sequelize;
