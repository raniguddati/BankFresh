
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  card_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' },
  transaction_date: 
  { type: Date,
    required:true, 
  },
  transaction_type: 
  { type: String ,
    required:true, 
  },
  transaction_amount:
   { type: Number,
    required:true, 
  },
});

const Transactions = mongoose.model('Transactions', transactionSchema);

module.exports = Transactions;
