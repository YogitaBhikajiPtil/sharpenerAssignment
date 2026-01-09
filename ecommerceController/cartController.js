

const getCartById = (req,res)=>{
    const id = req.params.id;
    res.send(`Fetching cart for user with ID: ${id}`)
}

const postCartById = (req,res)=>{
    const id = req.params.id;
    res.send(`Adding product to cart for user with ID: ${id}`)
}

module.exports = {
    getCartById,
    postCartById
}

