// src/app.js
const express = require("express");

const app = express();

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("CliqCase API running...");
});

app.get("/health", (req, res) => {
  res.send("OK");
});

module.exports = app;
