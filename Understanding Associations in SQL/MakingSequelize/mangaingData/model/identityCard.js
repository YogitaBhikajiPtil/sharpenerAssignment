const {DataTypes} = require("sequelize");
const sequelize = require("../dbConnection");

const identityCard = sequelize.define("identityCard",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:true
    },
    cardNo:{
        type:DataTypes.INTEGER,
        unique:true,
        allowNull:false
    }
})

module.exports = identityCard;