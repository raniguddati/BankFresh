// routes/savings.js
const express = require('express');
const Savings = require('../models/saving');

const router = express.Router();

// Create a new savings record
router.post('/create', async (req, res) => {
  try {
    const { amount, goal } = req.body;
    const newSavings = new Savings({ amount, goal });
    await newSavings.save();
    res.status(201).json({ message: 'Savings record created successfully' });
  } catch (error) {
    console.error('Error creating savings record:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
