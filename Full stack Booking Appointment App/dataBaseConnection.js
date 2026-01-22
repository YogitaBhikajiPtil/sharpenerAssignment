
const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("testdb","root","Yogita@0303",{
    host :"localhost",
    dialect :"mysql"
});
(async ()=>{
    try{
        await sequelize.authenticate();
        console.log("connection to the database has created");

    }
    catch(err){
        console.log(err);
    }
})();

module.exports = sequelize;