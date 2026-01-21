
const db = require("../dbConnection")
const Student = require("../model/student")
const IdentityCard = require("../model/identityCard")
//insertion in database
const addEntries = async(req,res)=>{
try{
  const {email,name} = req.body;
  const student = await Student.create(
    {
        email:email,
        name:name
    }
  )

  res.status(201).send(`user with name:${name} is created`)
}
catch(err){
  res.status(500).send("unable to make an entry")
}
  
  // const insertQuery = `insert into students (email,name) VALUES (?,?)`

  // db.execute(insertQuery,[email,name],(err)=>{
  //   if(err){
  //       console.log(err.message)
  //       res.status(500).send(err.message);
  //       db.end();
  //       return;
  //   }

  //   console.log("value has been inserted")
  //   res.status(200).send(`status with name ${name} successfully added`)
  // })
}


//update value in database
const updateEntry = async(req,res)=>{
  try{
  const {id} = req.params;
  const {name} = req.body;

  const student = await Student.findByPk(id);
  if(!student){
    res.status(404).send("user not found");
  }
  student.name = name;
  await student.save();
  res.status(200).send(`user has been updated`)
  }
  catch(err){
   res.status(500).send("user cannot be updated")
  }
  // const updateQuery = `update students set name = ? where id=?`;
  // db.execute(updateQuery,[name,id],(err,result)=>{
  //   if(err){
  //     console.log(err.message);
  //     res.status(500).send(err.message);
  //     db.end();
  //     return;
  //   }

  //   if(result.affectedRows ===0){
  //     res.status(404).send("student not found");
  //     return;
  //   }

  //   res.status(200).send("user has been updated");
  // })
}

//delete value in database
const deleteEntry = async(req,res)=>{
  try{
  const {id} = req.params;
  const student = await Student.destroy({
    where :{
      id:id
    }
  })
  if(!student){
    res.status(404).send(`student not found`)
  }
  res.status(200).send(`student is deleted`);
  }
  catch(err){
    console.log(err)
    return res.status(500).send("error encountered while deleting.")
  } 
  // const deleteQuery = `delete from students where id = ?`;

  // db.execute(deleteQuery,[id],(err,result)=>{
  //   if(err){
  //     console.log(err.message);
  //     res.status(500).send(err.message);
  //   }
  //   if(result.affectRows === 0 ){
  //     res.status(400).send("student is not found")
  //     return;
  //   }
    
  //  res.status(200).send(`user with ${id} is deleted`);
  // })
}

const addingValuesToStudentAndIdentityTable = async(req,res)=>{
  try{
    const student = await Student.create(req.body.student);
    const idCard = await IdentityCard.create({...req.body.IdentityCard,StudentId:student.id})

    res.status(201).json({student,idCard});
  }
  catch(err){
    res.status(201).json({student,idCard});
  }
}
module.exports = {
  addEntries,
  updateEntry,
deleteEntry,
addingValuesToStudentAndIdentityTable
};