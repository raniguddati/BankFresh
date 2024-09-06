const Card = require('../models/card');
const User = require('../models/user');

const registerCard = async (req, res) => {
  try {
    const { userId, cardNumber, card_date, CVV, phoneNumber } = req.body;

    const userExists = await User.findOne({ _id: userId });

    if (!userExists) {
      return res.json({ error: 'No user found' });
    }

   else if (!cardNumber || !card_date || !CVV || !phoneNumber) {
      return res.json({ error: 'Empty input fields' });
    }

    // Function to determine card type based on the first digits
    
    const getCardType = (cardNumber) => {
      if (/^4/.test(cardNumber)) {
        return 'Visa';
      } else if (/^5[1-5]/.test(cardNumber)) {
        return 'MasterCard';
      } else {
        return 'Unknown';
      }
    };

    if (cardNumber.length === 16 && CVV.toString().length === 3) {
      const cardType = getCardType(cardNumber);

      const card = new Card({
        userId,
        card_number: cardNumber,
        card_type: cardType,
        card_date,
        CVV,
        phoneNumber,
        card_balance: 0, 
      });

      await card.save();
      return res.json(card);
    } else {
      return res.json({ error: 'Invalid inputs' });
    }
  } catch (error) {
    console.error('Error registering card:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  registerCard,
};
