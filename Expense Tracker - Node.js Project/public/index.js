const form = document.getElementById("signupForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault(); // Prevent page reload

  try {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validation
    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    // Axios POST request
    const response = await axios.post("http://localhost:3000/auth/signup", {
      name,
      email,
      password
    });

    alert(response.data.message);

    // Clear form
    form.reset();

  } catch (error) {
    console.error(error);

    if (error.response) {
      alert(error.response.data.message || "Signup Failed");
    } else {
      alert("Server not responding");
    }
  }
});