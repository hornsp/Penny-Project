// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS middleware
const app = express();
const port = 3000;

// Connect to MongoDB (replace 'your-mongodb-uri' with your actual MongoDB URI)
mongoose.connect('mongodb+srv://hornsp:!Sam14Zach8!@cluster0.gjze1ee.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Enable CORS for all routes
app.use(cors());

// Dog model schema (replace with your actual schema)
const Dog = mongoose.model('Dog', {
  name: String,
  walkCounter: Number,
  breakfast: Boolean,
  dinner: Boolean,
});

// Routes

// Get walk counter
app.get('/getWalkCounter', async (req, res) => {
  try {
    const dog = await Dog.findOne({ name: 'Penny' }); // Assuming there's a dog named 'Penny' in your database
    res.json({ walkCounter: dog.walkCounter });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update breakfast status
app.post('/api/track/breakfast/update', async (req, res) => {
  try {
    const dog = await Dog.findOneAndUpdate({ name: 'Penny' }, { $set: { breakfast: true } }, { new: true });
    res.json({ message: 'Breakfast tracked successfully', dog });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get breakfast button state
app.get('/api/get_button_state/breakfast', async (req, res) => {
  try {
    const dog = await Dog.findOne({ name: 'Penny' });
    res.json({ button_state: dog.breakfast ? 'Yes' : 'No' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
