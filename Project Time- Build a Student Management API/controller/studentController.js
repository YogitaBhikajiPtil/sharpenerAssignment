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

const getStudents = (req,res)=>{
    const getStudentQuery = `select name from studentss`;

    mysqlConnection.execute(getStudentQuery,(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send(err.message);
        }
        const studentNames = result.map(row=>row.name);
        res.status(200).json(
           { name:studentNames}
        );
    })
}
const getStudentsById = (req,res)=>{
    const {id} = req.params;
    const getStudentsByIdQuery = `select name from studentss where id = ? `
    
    mysqlConnection.execute(getStudentsByIdQuery,[id],(err,result)=>{
    if(err){
        console.log(err);
        res.status(500).send(err.message);
    }

    const students = result.map(student=>student.name)
    res.status(200).json({
        name:students
    })
    
    })
}

const updateStudentsById = (req,res)=>{
    const {id} = req.params;
    const{name,age,email} = req.body;
    const updateQuery =`update studentss
     set name =?,
     email =?,
     age =?
     where id=?
    `

    mysqlConnection.execute(updateQuery,[name,email,age,id],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send(err.message);
            return;
        }
        if(result.affectedRows ===0){
           return res.status(404).send("student not found");
        
        }
        res.status(200).send("student has been updated")
    })
}

const  deleteStudent = (req,res)=>{
    const {id} = req.params;
    const deleteQuery = `delete from studentss where id=?`;

    mysqlConnection.execute(deleteQuery,[id],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send(err.message);
            return;
        }
        if(result.affectedRows === 0){
            return res.status(404).send("student not found")
        }
        res.status(200).send(`student with ${id} deleted`);

    })
}
module.exports = {
    addStudents,
    getStudents,
    getStudentsById,
    updateStudentsById,
    deleteStudent
};
