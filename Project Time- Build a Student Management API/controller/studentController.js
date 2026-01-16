const mysqlConnection = require("../mysqlConnection");

const addStudents = (req,res)=>{
    const {name,email,age} = req.body;
    const addStudentsQuery = `insert into studentss (name,email,age) values (?,?,?)`;

    mysqlConnection.execute(addStudentsQuery,[name,email,age],(err)=>{
        if(err){
            console.log(err);
            res.status(500).send(err.message);
            //mysqlConnection.end();
            return;
        }

        console.log("value has been inserted");
        res.status(200).send(`${name} new student added`)
    })
}

module.exports = {addStudents};
