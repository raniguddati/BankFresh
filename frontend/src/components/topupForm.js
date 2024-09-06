import React, { useState } from 'react';
import '../css-styles/topupform.css';

const TopupForm = () => {
  
  const [selectedSender, setSelectedSender] = useState(''); 
  const [selectedCard, setSelectedCard] = useState(''); 


  const [transferAmount, setTransferAmount] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const [balance, setBalance] = useState(1000); 

  const handleSenderChange = (e) => {
    setSelectedSender(e.target.value);
  };
  const handleCardChange = (e) => {
    setSelectedCard(e.target.value);
  };

  const handleTransferAmountChange = (e) => {
    setTransferAmount(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };
const checkFundsAvailability = async () => {

    const response = await fetch('/api/check-funds', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: '123', // Replace with the actual user ID
        transferAmount: parseFloat(transferAmount), // Convert to float or integer as needed
      }),
    });

    const result = await response.json();

    if (result.hasSufficientFunds) {
      processTransaction();
    } else {
      alert('Insufficient funds. Please choose another funding source.');
    }
  };

  const processTransaction = async () => {
    const response = await fetch('/api/process-transaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: '123', // Replace with the actual user ID
        transferAmount: parseFloat(transferAmount), // Convert to float or integer as needed
      }),
    });

    const result = await response.json();

    if (result.success) {
      alert('Transaction successful!');
      setBalance(result.updatedBalance);
    } else {
      alert('Transaction failed. Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkFundsAvailability();
  };
  
  return (
    <form className='topup-form' onSubmit={handleSubmit}>
      <div className='sender-box'>
        <label className='sender-label'>
        <select
            className="sender-select"
            value={selectedSender}
            onChange={handleSenderChange}
          >
          <option value="">Sender</option>
            <option value="visa1">VISA 1</option>
            <option value="visa2">VISA 2</option>
          </select>
        </label>
        <div>
        <label className='card-label'>
          <select
            className="card-select"
            value={selectedCard}
            onChange={handleCardChange}
          > 
          <option value="">Card</option>
            <option value="visa1">VISA 1</option>
            <option value="visa2">VISA 2</option>
          </select>
        </label>
        </div>
      </div>
      <div>
        <label className='input-label'>
          <input
            type="text"
            className="amount-input"
            placeholder="Transfer amount"
            value={transferAmount}
            onChange={handleTransferAmountChange}
          />
        </label> 
        <label className='currency-label'>
          <select
            className="currency-select"
            value={selectedCurrency}
            onChange={handleCurrencyChange}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="AZN">AZN</option>
          </select>
        </label>
      </div>
      <div>
      <p className='warn-info'>min 0.01-max 50.000. (for VAT max 200.00)</p>
      </div>
      <button className='transfer-btn' type="submit">Transfer</button>
    </form>
  );
};

export default TopupForm;
