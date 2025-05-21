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

module.exports = router;
