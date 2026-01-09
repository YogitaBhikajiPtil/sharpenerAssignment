const getUser=(req,res)=>{
    res.send(`Fetch all users.`);
}

const postUser = (req,res)=>{
    res.send(`Add a new user.`)
}

const getUserById = (req,res)=>{
    const userId = req.params.id;
    res.send(`userId is ${userId}`)
}

module.exports = {
    getUser,
    postUser,
    getUserById
}
