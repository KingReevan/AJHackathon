const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  firstName: String,
  lastName: String,
  roles: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
