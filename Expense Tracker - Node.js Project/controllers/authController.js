const User = require("../models/user")

const bcrypt = require("bcrypt");

// SIGNUP FUNCTION
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if all fields entered
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
   
    // Check if email already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password
   // we convert the password into a hashed (encrypted-like) value that cannot be reversed.
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      message: "Signup successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// ---------------- LOGIN ----------------
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate fields
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required"
      });
    }

    //  Check if user exists
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // Compare entered password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid password"
      });
    }

    // Send success response (no JWT)
    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({
      message: "Server Error"
    });
  }
};
module.exports={
  signup,
  login
}