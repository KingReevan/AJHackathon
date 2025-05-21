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

// Get single destination
router.get('/:id', async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (!destination) return res.status(404).json({ message: 'Destination not found' });
    res.json(destination);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
