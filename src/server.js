require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('CliqCase API running...');
});


// connect DB first  
connectDB(process.env.MONGO_URI)
  .then(() => {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => console.log("🚀 Server running on port", PORT));
  })
  .catch((err) => {
    process.exit(1);
  });