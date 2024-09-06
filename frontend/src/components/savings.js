// Savings.js
import React from 'react';
import styled from 'styled-components';

const SavingsWrapper = styled.div`
  margin-top: 20px;
  background: rgba(10, 144, 144, 0.107) ;
  border-radius: 10px;
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.201);
  padding: 12px 20px 24px 20px;
  width: 366px;
  cursor:pointer;
`;

const SavingsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  color:white;
  border: 1px solid rgba(10, 144, 144)  ;
  background-color: rgb(10, 144, 144) ;
`;

const TableData = styled.td`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid rgb(10, 144, 144);
`;

const Savings = () => {
  const savingsData = [
    { name: 'Emergency Fund', amount: '$5,000' },
    { name: 'Vacation Fund', amount: '$2,000' },
    { name: 'Home Down Payment', amount: '$10,000' },
   
  ];

  return (
    <SavingsWrapper>
      <h3>Your Savings</h3>
      <SavingsTable>
        <thead>
          <tr>
            <TableHeader>Saving Goal</TableHeader>
            <TableHeader>Amount</TableHeader>
          </tr>
        </thead>
        <tbody>
          {savingsData.map((item, index) => (
            <tr key={index}>
              <TableData>{item.name}</TableData>
              <TableData>{item.amount}</TableData>
            </tr>
          ))}
        </tbody>
      </SavingsTable>
    </SavingsWrapper>
  );
};

export default Savings;
