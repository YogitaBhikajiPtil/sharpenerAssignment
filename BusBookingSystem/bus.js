const express = require("express");
const mysql = require("mysql2");
const app = express();

const connection = mysql.createConnection({
    host :'localhost',
    user: 'root',
    password:'Yogita@0303',
    database:'testdb'
}
)

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("connection has been created");

    connection.execute(`
    create table users(
    id int auto_increment primary key,
    name varchar(20),
    email varchar(45)
    )`,(err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log("table is created")
    })

    connection.execute( `
    create table buses(
    id int auto_increment primary key,
    busNumber int,
    totalSeats int
    )`,(err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log("table is created")
    })
 
    connection.execute( `
        create table payments(
        id int auto_increment primary key,
        amountPaid int,
        paymentStatus varchar(20)
        )`,(err)=>{
            if(err){
                console.log(err);
                connection.end();
                return;
            }
            console.log("table is created")
        })
   
})

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen(3000,()=>{
    console.log("server is running")
})  