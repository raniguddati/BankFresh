// TopContent.js
import React, { useState } from 'react';
import styled from 'styled-components';

const TopContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

const NotificationButtonContainer = styled.div`
  position: relative;
`;

const NotificationIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: rgba(10, 144, 144);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left:20px;

  &:hover {
    background-color: rgba(10, 100, 100);
  }
`;

const SearchBarContainer = styled.div`
  display: flex;
`;

const SearchInput = styled.input`
  padding: 8px 122px;
  margin-right: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  @media (max-width: 768px) {
    width: 100px; 
  }
`;

const SearchButton = styled.button`
  padding: 8px 12px;
  background-color: rgba(10, 144, 144);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: rgba(10, 100, 100);
  }
`;

const TopContent = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <TopContentContainer>
      <SearchBarContainer>
        <SearchInput
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </SearchBarContainer>
      <NotificationButtonContainer>
        <NotificationIcon>
          <span role="img" aria-label="Notification">
            🔔
          </span>
        </NotificationIcon>
      </NotificationButtonContainer>
    </TopContentContainer>
  );
};

export default TopContent;
