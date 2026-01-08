const express = require("express");
const app = express();


const bookList = require("./routesExpress/books")
app.use(bookList);
app.listen(3000,()=>{
    console.log("server is listening");
})