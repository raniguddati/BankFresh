// Investments.js
import React from 'react';
import styled from 'styled-components';

const InvestmentsWrapper = styled.div`
  margin-top: 20px;
  background: rgba(10, 144, 144, 0.107) ;
  border-radius: 10px;
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.201);
  padding: 12px 20px 24px 20px;
  width: 560px;
  cursor:pointer;
  @media (max-width: 768px) {
    width: 366px;
    
  }
`;

const InvestmentsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 8px;
  color:white;
  text-align: left;
  border: 1px solid rgb(10, 144, 144);
  background-color: rgb(10, 144, 144);
`;

const TableData = styled.td`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid rgb(10, 144, 144);
`;

const Investments = () => {
  const investmentsData = [
    { name: 'Stocks', amount: '$10,000' },
    { name: 'Bonds', amount: '$5,000' },
    { name: 'Real Estate', amount: '$15,000' },
    // Add more investment items as needed
  ];

  return (
    <InvestmentsWrapper>
      <h3>Your Investments</h3>
      <InvestmentsTable>
        <thead>
          <tr>
            <TableHeader>Investment Type</TableHeader>
            <TableHeader>Amount</TableHeader>
          </tr>
        </thead>
        <tbody>
          {investmentsData.map((item, index) => (
            <tr key={index}>
              <TableData>{item.name}</TableData>
              <TableData>{item.amount}</TableData>
            </tr>
          ))}
        </tbody>
      </InvestmentsTable>
    </InvestmentsWrapper>
  );
};

export default Investments;
