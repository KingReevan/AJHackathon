const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
  name: String,
  country: String,
  description: String,
  images: [String],
  tags: [String],
  culturalHighlights: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// 🔴 IMPORTANT: explicitly set collection name to match existing data
module.exports = mongoose.model("Destination", destinationSchema, "destinations");
