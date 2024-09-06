
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Sidebar from './sidebar';
import { FaCreditCard,FaCalendar, FaKey, FaPhoneAlt } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
`;

const FormContainer = styled.div`
  margin-left: 30px;
  margin-top: 40px;
`;

const Form = styled.form`
  padding: 18px 160px 24px 60px;
  background: rgba(10, 144, 144, 0.107);
  border-radius: 10px;
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.201);
  cursor: pointer;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Icon = styled.span`
  margin-right: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: rgba(10, 144, 144);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;

const NewUserContent = () => {

  const navigateTo = useNavigate();

  const [data, setData] = useState({
    cardNumber: '',
    expiryDate: '',
    CVV: '',
    phoneNumber: '',
  });

  const handleAddCard = async () => {
    const { cardNumber, expiryDate, CVV, phoneNumber } = data;
    try {
      const response = await axios.post('/register-card', {
        cardNumber,
        expiryDate,
        CVV,
        phoneNumber,
      });
      alert('Card added successfully!', response);
      navigateTo('/dashboard')


    } catch (error) {
      console.error('Error adding card:', error);
      alert('Failed to add card. Please try again.');
    }
  };

  return (
    <Container>
      <Sidebar />
      <FormContainer>
        <Form onSubmit={handleAddCard}>
          <h3>Add a card</h3>
          <Label>
            <Icon>
              <FaCreditCard />
            </Icon>
            Card number
            <Input
              type="text"
              placeholder="Add your card number"
              value={data.cardNumber}
              onChange={(e) => setData({ ...data, cardNumber: e.target.value })}
            />
          </Label>
          <Label>
            <Icon>
              <FaKey />
            </Icon>
            CVV
            <Input
              type="text"
              placeholder="Add your CVV"
              value={data.CVV}
              onChange={(e) => setData({ ...data, CVV: e.target.value })}
            />
          </Label>
          <Label>
            <Icon>
              <FaPhoneAlt />
            </Icon>
            Phone number
            <Input
              type="text"
              placeholder="Add your phone number"
              value={data.phoneNumber}
              onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
            />
          </Label>
          <Label>
            <Icon>
              <FaCalendar />
            </Icon>
            Expiry Date (MM/YYYY)
      <Input
    type="text"
    placeholder="MM/YYYY"
    value={data.expiryDate}
    onChange={(e) => setData({ ...data, expiryDate: e.target.value })}
    onBlur={(e) => {
      const inputValue = e.target.value;
      const regex = /^(0[1-9]|1[0-2])\/\d{4}$/; // Validate MM/YYYY format
      if (!regex.test(inputValue)) {
        alert('Please enter a valid month and year (MM/YYYY)');
        setData({ ...data, expiryDate: '' });
      }
    }}
  />
          </Label>
          <Button type="submit">Add Card</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default NewUserContent;
