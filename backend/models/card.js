const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  card_number: { type: String, required: true },
  card_type: { type: String, required: true },
  card_date: { type: Date, required: true },
  CVV: { type: Number, required: true },
  phoneNumber: { type: Number, required: true },
  card_balance: { type: Number, required: true },
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
