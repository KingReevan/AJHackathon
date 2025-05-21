const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

// Login endpoint
router.post("/login", async (req, res) => {
  let { username, password } = req.body;
  console.log("Login attempt:", username);

  if (!username || !password) {
    return res.status(400).json({ error: "Missing username or password" });
  }

  const cleanUsername = username.trim();
  const cleanPassword = password.trim();
  console.log("Raw password:", password);
  console.log("Cleaned password:", cleanPassword);

  try {
    const user = await User.findOne({ username: cleanUsername });
    console.log("Found user:", user);

    if (!user) return res.status(401).json({ error: "Invalid username or password" });

    const passwordValid = await bcrypt.compare(cleanPassword, user.passwordHash);
    console.log("Password valid:", passwordValid);

    if (!passwordValid) return res.status(401).json({ error: "Invalid username or password" });

    // ✅ Generate JWT token
    const payload = {
      id: user._id,
      username: user.username,
      roles: user.roles
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET || "supersecretkey", {
      expiresIn: "2h"
    });

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        roles: user.roles
      }
    });

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Server error" });
  }
});


// Signup endpoint (optional)
router.post("/signup", async (req, res) => {
  const { username, email, password, firstName, lastName } = req.body;

  if (!username || !email || !password)
    return res.status(400).json({ error: "Missing required fields" });

  try {
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser)
      return res.status(409).json({ error: "Username or email already exists" });

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      passwordHash,
      firstName,
      lastName,
      roles: ["user"]
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
