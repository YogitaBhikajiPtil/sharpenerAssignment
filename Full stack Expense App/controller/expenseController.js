const expense = require("../model/expense");


const getExpense = async(req,res)=>{
    try{
        const expenses = await expense.findAll();
        res.status(200).json(expenses)
    }
    catch(err){
        console.log(err.message);
        res.status(500).send(err.message)
    }
}
const addExpense = async (req,res)=>{
    try{
    const{amount,description,category} = req.body;

    const newExpense = await expense.create({
        amount:amount,
        description:description,
        category:category
    })

    res.status(201).json(newExpense)
}
catch(err){

    res.status(500).send(err.message);
}
}


const deleteExpense = async (req,res)=>{
    try{
        const id = req.params.id;
       const deleted =  await expense.destroy({
            where:{
                id:id
            },
        });

        if(!deleted){
            return res.status(404).send(`not found`)
        }

        res.status(200).send(`expense with id  ${id} deleted`)
    }

    catch(err){
        res.status(500).send(err.message)
    }
}

const editExpense = async (req,res) =>{
    try{
         const {amount,description,category} = req.body;
        const id = req.params.id;
         const updatedExpense = await expense.findByPk(id);
         if(!updatedExpense){
           return res.status(404).send("expense not found");
         } 
         
            updatedExpense.amount = amount;
            updatedExpense.description = description;
            updatedExpense.category = category;

           await updatedExpense.save();
           res.status(200).json(updatedExpense);
        
    }
    catch(err){
        res.status(500).send(err.message)
    }
}

module.exports={
    addExpense,
    deleteExpense,
    editExpense,
    getExpense
}

