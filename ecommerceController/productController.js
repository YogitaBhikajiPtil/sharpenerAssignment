const getProducts = (req,res)=>{
    res.send(`Fetch all products.`);
}

const postProducts = (req,res)=>{
    res.send(`Add a new product.`)
}


const getProductsById = (req,res)=>{
    const productId = req.params.id;
    res.send(`userId is ${productId}`)
}

module.exports = {
    getProducts,
    postProducts,
    getProductsById
}