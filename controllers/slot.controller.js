const Slot = require("../models/Slot");

exports.generateSlots = async (req, res) => {
  try {
    const { date, startTime, endTime, slotDuration } = req.body;

    // example:
    // date: "2025-12-15"
    // startTime: "09:00"
    // endTime: "17:00"
    // slotDuration: 30

    const slots = [];
    let current = startTime;

    while (current < endTime) {
      slots.push({
        date,
        time: current
      });

      const [h, m] = current.split(":").map(Number);
      const totalMinutes = h * 60 + m + slotDuration;
      current =
        String(Math.floor(totalMinutes / 60)).padStart(2, "0") +
        ":" +
        String(totalMinutes % 60).padStart(2, "0");
    }

    await Slot.insertMany(slots, { ordered: false });

    res.status(201).json({
      message: "Slots generated successfully",
      total: slots.length
    });
  } catch (err) {
    // Ignore duplicate slot errors
    res.status(200).json({
      message: "Slots already exist or partially created"
    });
  }
};


exports.getAvailableSlots = async (req, res) => {
  const { date } = req.query;

  const slots = await Slot.find({
    date,
    isBooked: false,
    isBlocked: false
  }).sort({ time: 1 });

  res.json(slots);
};
