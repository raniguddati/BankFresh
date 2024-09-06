import React, { useState } from 'react';
import '../css-styles/payform.css';

const PayForm = ({ onClose }) => {
  const [paymentType, setPaymentType] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const handlePaymentTypeChange = (e) => {
    setPaymentType(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };
  const handleTransferAmountChange = (e) => {
    setTransferAmount(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  const handlePaymentSubmit = () => {
    // Add your logic for handling the payment submission
    // You may want to send this information to your server or perform other actions
    console.log('Payment Type:', paymentType);
    console.log('Phone Number:', phoneNumber);
    console.log('Country Code:', countryCode);

    // Close the form after submission
    onClose();
  };

  return (
    <div className="pay-form-container">
      <h3>Select Payment Type</h3>
      <select value={paymentType} onChange={handlePaymentTypeChange}>
        <option value="">Select Payment Type</option>
        <option value="mobile">Mobile</option>
        <option value="internet">Internet</option>
        <option value="utility">Utility</option>
        <option value="insurance">Insurance</option>
        <option value="phone">Phone</option>
        <option value="tv">TV</option>
        {/* Add more payment types as needed */}
      </select>

      {paymentType === 'mobile' && (
        <div>
          <h4>Mobile Payment Details:</h4>
          <label className='countrycode'>
            <select value={countryCode} onChange={handleCountryCodeChange}>
              <option value="">Select Country Code</option>
              <option value="+1">+1 (USA)</option>
              <option value="+994">+994 (AZE)</option>
            </select>
          </label>
          <label>
            <input
              type="text"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Enter Phone Number"
            />
          </label>
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
        </div>
        
      )}


      <button onClick={handlePaymentSubmit}>Submit Payment</button>
    </div>
  );
};

export default PayForm;
