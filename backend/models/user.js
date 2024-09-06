const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
   cards:[
    {
        cardId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Card',
            required: true,
          },
    }
   ],

  cardTransactions: [
    {
        transaction: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Transactions',
            required: true,
      },


    },
  ],
  savings:[{
    savings: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transactions',
        required: true,
  },
  }],
  investments:[{
    investments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transactions',
        required: true,
  },
  }],
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
