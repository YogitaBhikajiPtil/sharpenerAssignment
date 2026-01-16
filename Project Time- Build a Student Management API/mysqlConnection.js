const mysql = require("mysql2");

const connection = mysql.createConnection({
     host :'localhost',
    user: 'root',
    password:'Yogita@0303',
    database:'testdb'
}) 

connection.connect((err)=>{
    if(err){
       console.log(err.message)
       return;
    }
    console.log("connection has been created");

    connection.execute(`create table if not exists studentss(
        id int primary key auto_increment ,
        name varchar(20),
        email varchar(30),
        age int
        )`,(err)=>{
            if(err){
           console.log(err);
           connection.end();
           return;
          }
        console.log("table is created");
        })
})

module.exports = connection;