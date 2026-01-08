const express = require("express");
const app = express();

const homeRouter = require("./crudRoutes/homeRoute");
const studentRouter = require("./crudRoutes/studentRoute")
const courseRouter = require("./crudRoutes/courseRoute")

const error = require("./crudRoutes/404Handling");

app.use(homeRouter);
app.use(studentRouter);
app.use(courseRouter);

app.use(error);

app.listen(4000,()=>{
    console.log("server is listening");
})