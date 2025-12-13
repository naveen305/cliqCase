// config/db.js
const mongoose = require('mongoose');

async function connectDB(uri) {
  try {
    await mongoose.connect(uri, {
    });
  } catch (err) {
    process.exit(1);
  }
}

module.exports = connectDB;
