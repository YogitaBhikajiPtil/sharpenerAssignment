
const db = require("../dbConnection")

//insertion in database
const addEntries = (req,res)=>{

  const {email,name} = req.body;
  const insertQuery = `insert into students (email,name) VALUES (?,?)`

  db.execute(insertQuery,[email,name],(err)=>{
    if(err){
        console.log(err.message)
        res.status(500).send(err.message);
        db.end();
        return;
    }

    console.log("value has been inserted")
    res.status(200).send(`status with name ${name} successfully added`)
  })
}

//update value in database
const updateEntry = (req,res)=>{
  const {id} = req.params;
  const {name} = req.body;
  const updateQuery = `update students set name = ? where id=?`;
  db.execute(updateQuery,[name,id],(err,result)=>{
    if(err){
      console.log(err.message);
      res.status(500).send(err.message);
      db.end();
      return;
    }

    if(result.affectedRows ===0){
      res.status(404).send("student not found");
      return;
    }

    res.status(200).send("user has been updated");
  })
}

//delete value in database
const deleteEntry = (req,res)=>{
  const {id} = req.params;
  const deleteQuery = `delete from students where id = ?`;

  db.execute(deleteQuery,[id],(err,result)=>{
    if(err){
      console.log(err.message);
      res.status(500).send(err.message);
    }
    if(result.affectRows === 0 ){
      res.status(400).send("student is not found")
      return;
    }
    
   res.status(200).send(`user with ${id} is deleted`);
  })
}
module.exports = {
  addEntries,
  updateEntry,
deleteEntry
};