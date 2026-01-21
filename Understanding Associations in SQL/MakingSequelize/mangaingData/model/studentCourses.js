const {DataTypes} = require("sequelize");
const sequelize = require("../dbConnection");

const studentCourses = sequelize.define("studentCourses",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    }
})

module.exports = studentCourses;