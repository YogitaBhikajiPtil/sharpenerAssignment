const form = document.getElementById("expenseForm");
const table = document.getElementById("expenseTable");

if (localStorage.getItem("isLoggedIn") !== "true") {
  alert("Please login first");
  window.location.href = "login.html";
}

// 🔹 Fetch old expenses on page load
window.addEventListener("DOMContentLoaded", loadExpenses);

async function loadExpenses() {
  const res = await axios.get("http://localhost:3000/expenses");

  table.innerHTML = "";

  res.data.forEach(expense => {
    showExpense(expense);
  });
}

// 🔹 Add new expense
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const amount = document.getElementById("amount").value;
  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;

  const res = await axios.post("http://localhost:3000/expenses", {
    amount,
    description,
    category
  });

  showExpense(res.data); // add to UI
  form.reset();
});

// 🔹 Show expense in table
function showExpense(expense) {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${expense.amount}</td>
    <td>${expense.description}</td>
    <td>${expense.category}</td>
  `;

  table.appendChild(row);
}