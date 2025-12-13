const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema(
  {
    date: { type: String, required: true }, // YYYY-MM-DD
    time: { type: String, required: true }, // HH:mm
    isBooked: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false }
  },
  { timestamps: true }
);

// Prevent duplicate slots
slotSchema.index({ date: 1, time: 1 }, { unique: true });

module.exports = mongoose.model("Slot", slotSchema);
