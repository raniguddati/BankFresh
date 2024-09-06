import React, { useState } from 'react';
import '../css-styles/transferform.css';

const TransferForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [transferType, setTransferType] = useState('');
  const [transfers, setTransfers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cardNumber && amount && transferType) {
      const newTransfer = {
        cardNumber,
        amount,
        transferType,
      };
      setTransfers([...transfers, newTransfer]);
      setCardNumber('');
      setAmount('');
      setTransferType('');
    }
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
         
          <input
            type="text"
            id="cardNumber"
            placeholder='Enter car number'
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            id="amount"
            placeholder='Transfer amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="othertrans-container">
          <select  className="othertrans-select"
            id="transferType"
            value={transferType}
            onChange={(e) => setTransferType(e.target.value)}
          >
            <option value="">Other Transfers</option>
            <option value="betweenCardsAndAccounts">Between my cards and accounts</option>
            <option value="international">International Transfers</option>
            <option value="requestMoney">Request Money</option>
            <option value="toOtherBankAccount">To Other Bank Account</option>
            {/* Add more transfer types as needed */}
          </select>
        </div>
        <div className="input-container">
          <button type="submit">Transfer</button>
        </div>
      </form>
      <div>
      
        <ul>
          {transfers.map((transfer, index) => (
            <li key={index}>
              Card Number: {transfer.cardNumber}, Amount: {transfer.amount}, Transfer Type: {transfer.transferType}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransferForm;
