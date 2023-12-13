// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // Add this line for parsing request bodies
const cors = require('cors'); // Add this line for enabling CORS

const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON request bodies

// MongoDB connection (replace 'your-database-url' with your actual MongoDB URL)
mongoose.connect('mongodb://localhost:27017/your-database-name', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a route for getting the walk counter
app.get('/getWalkCounter', (req, res) => {
  // Implement logic to get walk counter from the database
  // For example:
  const walkCounter = 42; // Replace with actual data retrieval logic
  res.json({ walkCounter });
});

// Define a route for tracking breakfast
app.post('/api/track/breakfast/update', (req, res) => {
  // Implement logic to update breakfast status in the database
  // For example:
  res.json({ message: 'Breakfast status updated' });
});

// Define a route for getting breakfast button state
app.get('/api/get_button_state/breakfast', (req, res) => {
  // Implement logic to get breakfast button state from the database
  // For example:
  const buttonState = 'enabled'; // Replace with actual data retrieval logic
  res.json({ button_state: buttonState });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
