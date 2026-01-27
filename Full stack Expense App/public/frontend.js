
const form = document.getElementById("expense-form");
window.addEventListener("DOMContentLoaded",getExpense);

function getExpense(){
  axios.get("http://localhost:8080/expense/getExpenses")
  .then((res)=>{
    const ul = document.getElementById("expense-list");
    ul.innerHTML ="";
    res.data.forEach((expense)=>{
      showExpense(expense);
    })

  })
  .catch((err)=>{
    console.log(err);
  })
}

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    const amount = document.getElementById("amount").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;

   const expenseInfo = {
    amount,
    description,
    category
   }
   
   axios.post("http://localhost:8080/expense/addExpense",expenseInfo)
   .then((res)=>{
    showExpense(res.data);
    form.reset()
   })
   
   .catch((err)=>{
    console.log(err);
   })
})

function showExpense(expense){
  const ul = document.getElementById("expense-list");

  const li = document.createElement("li");
  li.textContent = expense.amount + "-" +  expense.description + "-" + expense.category; 

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";

  editBtn.addEventListener("click",()=>{
   
    const newAmount = prompt("Enter new amount", expense.amount);

    const newDescription = prompt("Enter new description", expense.description);

    const newCategory = prompt("Enter new category", expense.category);


    axios.put(`http://localhost:8080/expense/editExpense/${expense.id}`,{
    amount:newAmount,
    description:newDescription,
    category:newCategory
  })
    .then(
      getExpense
    )
    .catch((err)=>{
      console.log(err)
    })
  })
  
  
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click",()=>{
  axios.delete(`http://localhost:8080/expense/deleteExpense/${expense.id}`)
    .then(
        getExpense
    )
    .catch((err)=>{
        console.log(err)
    })
  })

  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  ul.appendChild(li);
}