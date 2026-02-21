const express = require("express");
const cors = require("cors");

const app = express();
const sequelize = require("./dbConnection");

app.use(cors());

// Middleware
app.use(express.json());

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

// Sync database and start server
sequelize.sync()
  .then(() => {
    console.log("Tables Created");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch(err => console.log(err));
