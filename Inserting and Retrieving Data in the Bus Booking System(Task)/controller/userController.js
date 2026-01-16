const dataBaseConnection = require("../dataBaseConnection");

const addUser = (req,res)=>{
    const{email,name} = req.body;
    const addUserQuery = `insert into user (email,name) values (?,?)`;

    dataBaseConnection.execute(addUserQuery,[email,name],(err)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
        }
        res.status(200).send(`new user ${name} added`);
    })
}

const getAllUser = (req,res)=>{
    const getAllUserQuery = `select name from user`

    dataBaseConnection.execute(getAllUserQuery,(err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
        }

        if(result.length ===0 ){
            res.status(404).send("user not found");
        }

        const users = result.map(user=>user.name);
        res.status(200).json({
            user : users
        })
    })
}

module.exports ={
    addUser,
    getAllUser
}

