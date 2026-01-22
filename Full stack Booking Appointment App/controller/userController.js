const dataBaseConnection = require("../dataBaseConnection");
const user = require("../model/user");


const insertUser = async(req,res)=>{
    try{
    const {username,email,phoneNumber} = req.body;
    const newUser = await user.create({
        username:username,
        email:email,
        phoneNumber:phoneNumber
    })

    res.status(200).send(`${username}'s appointment booked`) ;
} catch(err){
    res.status(500).send(err.message)
}
}

const getUser =async (req,res)=>{
    try{
        const users = await user.findAll();
        res.status(200).json({
            message:"these are the users",
            data:users
        })
    }
    catch(err){
        res.status(500).send(err.message)
    }
}

const deleteUser =async (req,res)=>{
    try{
        const {id} = req.params;
         await user.destroy({
      where: {
    id: id,
     },
   });

   res.status(200).send(`user with ${id} succesfully deleted`)
    }
    catch(err){
        res.status(500).send(err.message)
    }
}
module.exports ={ 
    insertUser,
    getUser,
    deleteUser
}