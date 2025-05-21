const express = require("express");
const router = express.Router();
const Destination = require("../models/Destination");

// GET /api/destinations - fetch all destinations
router.get("/", async (req, res) => {
  try {
    const destinations = await Destination.find();
    //console.log("Fetched destinations:", destinations); // <-- ✅ Log in backend
    res.json(destinations);
  } catch (err) {
    console.error("Error fetching destinations:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Get single destination by name
router.get('/:name', async (req, res) => {
  try {
    const destination = await Destination.findOne({ name: req.params.name }).select('name country description longDescription images culturalHighlights');
    if (!destination) return res.status(404).json({ message: 'Destination not found' });
    res.json(destination);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
