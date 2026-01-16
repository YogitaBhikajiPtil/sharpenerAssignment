const mysql = require("mysql2");

const connection = mysql.createConnection({
     host :'localhost',
    user: 'root',
    password:'Yogita@0303',
    database:'testdb'
})

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("connection has been created")

    connection.execute(`
        create table if not exists bus(
        id int auto_increment primary key,
        availableSeats int ,
        busName varchar(20))`,(err)=>{
            if(err){
                console.log(err);
              //  connection.end();
                return;
            }
            console.log("table is created")
        })

    connection.execute(`
        create table if not exists user(
        email varchar(30),
        Name varchar(20))`,(err)=>{
            if(err){
                console.log(err);
                connection.end();
                return;
            }
            console.log("table is created")
        })    
})


module.exports = connection;