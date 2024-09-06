import Transactions from '../components/transactions';
import Cards from '../components/cards';
import Investments from '../components/investments';
import Savings from '../components/savings';
import styled from 'styled-components';


const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentGrid = styled.div`
  flex: 1;
  margin-bottom: 20px; 
  margin-left:10px;
  display:flex;
  &.transactions-grid {
      margin-right: 80px;}
      &.invest-grid{
        margin-right: 180px;
      }
  @media (max-width: 768px) {
  }
`;
const MainContent=()=> {
    return (
      <ContentWrapper>
      <ContentGrid>
        <Cards />
      </ContentGrid>
      <ContentGrid  className="transactions-grid">
        <Transactions />
      </ContentGrid>
      <ContentGrid>
        <Savings />
      </ContentGrid>
      <ContentGrid className="invest-grid">
        <Investments />
      </ContentGrid>
    </ContentWrapper>
    );
  }
  
  export default MainContent;