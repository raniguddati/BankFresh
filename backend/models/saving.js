
const mongoose = require('mongoose');

const savingsSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  card_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' },
  saving_goal: { type: Number, required:true,  },
  saved_amount: { type: Number, required:true,  },
});

const Savings = mongoose.model('Savings', savingsSchema);

module.exports = Savings;
