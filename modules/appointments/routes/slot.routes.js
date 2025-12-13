const express = require("express");
const router = express.Router();
const slotController = require("../controllers/slot.controller");

// Admin creates slots
router.post("/generate", slotController.generateSlots);

// Get available slots (user)
router.get("/available", slotController.getAvailableSlots);

module.exports = router;
