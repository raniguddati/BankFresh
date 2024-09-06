
const mongoose = require('mongoose');

const investmentSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  card_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' },
  investment_type: { type: String,
    required:true,  },
  invested_amount: { type: Number,
    required:true,  },
});

const Investments = mongoose.model('Investments', investmentSchema);

module.exports = Investments;
