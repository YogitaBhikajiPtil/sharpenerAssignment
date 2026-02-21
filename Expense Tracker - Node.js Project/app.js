const express = require("express");
const cors = require("cors");

const app = express();
const sequelize = require("./dbConnection");

app.use(cors());

// Middleware
app.use(express.json());

require("./models/user");
require("./models/expense");

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

const expenseRoutes = require("./routes/expenseRoutes");
app.use("/expenses", expenseRoutes);

app.get("/", (req, res) => {
  res.send("Server is running ✅");
});


sequelize.sync()
  .then(() => {
    console.log("Tables Created");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch(err => console.log(err));
