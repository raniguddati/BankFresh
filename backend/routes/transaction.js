// routes/transaction.js
const express = require('express');
const Transaction = require('../models/transaction');

const router = express.Router();

// Make a transaction
router.post('/make', async (req, res) => {
  try {
    const { amount, description } = req.body;
    const newTransaction = new Transaction({ amount, description });
    await newTransaction.save();
    res.status(201).json({ message: 'Transaction made successfully' });
  } catch (error) {
    console.error('Error making transaction:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
