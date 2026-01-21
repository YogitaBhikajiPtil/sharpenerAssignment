const {DataTypes} = require("sequelize");
const sequelize = require("../dbConnection");

const department = sequelize.define("department",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING
    }
})

module.exports = department;