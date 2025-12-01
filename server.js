require('dotenv').config();
const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('CliqCase API running...');
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
