// src/app.js
const express = require("express");
const slotRoutes = require("./modules/appointments/routes/slot.routes");


const app = express();

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("CliqCase API running...");
});


app.use("/slots", slotRoutes);


app.get("/health", (req, res) => {
  res.send("OK");
});

module.exports = app;
