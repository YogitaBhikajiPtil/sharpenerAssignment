const dataBaseConnection = require("../dataBaseConnection");

const addBus = (req,res)=>{
  const {busName,availableSeats} = req.body;
  const addQuery = `insert into bus (busName,availableSeats) values (?,?)`

  dataBaseConnection.execute(addQuery,[busName,availableSeats],(err)=>{
    if(err){
        console.log(err.message)
        res.status(500).send(err.message);
        dataBaseConnection.end();
        return;
    }
    console.log("value has been inserted");
    res.status(200).send(`status with name ${busName} succesfully added`)
  })
}

const getAvailableSeats = (req,res)=>{
  const {seats} = req.params;
  const getQuery = `select busName from bus where availableSeats> ?`
  
  dataBaseConnection.execute(getQuery,[seats],(err,result)=>{
    if(err){
      console.log(err);
      res.status(500).send(err.message)
    }
    if(result.length===0){
      res.status(400).send("buses not found")
      return;
    }
   const busName = result.map(bus=>bus.busName)
    res.status(200).json({
      message:`buses having more than ${seats} seats`,
      buses: busName
    })
  })
  
}
module.exports = {
    addBus,
    getAvailableSeats
}


