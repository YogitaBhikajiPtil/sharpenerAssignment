const form = document.getElementById("form");
const userList = document.getElementById("userList");

async function getUser(){
    try{
        const response = await axios.get(
            "http://localhost:8080/booking/getUser"
        );

        userList.innerHTML ="";

        response.data.data.forEach((user)=>{
          const li = document.createElement("li");
          li.textContent = `${user.username} - ${user.email} - ${user.phoneNumber}`;

          const deleteBtn = document.createElement("button");
          deleteBtn.textContent = "Delete";

          deleteBtn.addEventListener("click",async()=>{
            try{
                await axios.delete(`http://localhost:8080/booking/deleteUser/${user.id}`);
                alert("user deleted")
                getUser();
            }
            catch(err){
                console.log(err.message)
            }
          })
          li.appendChild(deleteBtn);
          userList.appendChild(li);

        })
    }
    catch(err){
        console.log(err.message);
        alert("failed to fetch users")
    }
}

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;

    const userInfo = {
        username,
        email,
        phoneNumber
    }

    const response = axios.post("http://localhost:8080/booking/insertUser",userInfo)
    .then((response)=>{
        console.log(response);
        alert("Appointment booked successfully")
        form.reset();
        getUser();
    })
    .catch((error=>{
        console.log(error);
        alert("error adding user")
    }))
    
})


window.addEventListener("DOMContentLoaded", getUser);

