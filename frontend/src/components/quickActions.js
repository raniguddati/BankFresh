import { FaPlus, FaWallet,FaExchangeAlt} from 'react-icons/fa';
import '../css-styles/quickActions.css';
import {  useState } from 'react';
import TopupForm from './topupForm';
import { useNavigate } from 'react-router-dom';
import PayForm from './payform';
import TransferForm from './transferform';

const QuickActions=()=> {
  
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const navigate = useNavigate();

  const navigateToTopUpForm = () => {
   navigate('/topup');
  };
  
  const navigateToPayForm = () => {
    navigate('/pay');
  };
  
  const navigateToTransferForm = () => {
    navigate('/transfer');
  };
  
    return (
      <div className="qa-main-container">
      <button className='top-up-container' onClick={navigateToTopUpForm}>
          <div className='icon-container'> <FaPlus style={{ marginRight: '8px',  }} /></div>
       Top up
          </button>
     <button className='pay-container' onClick={navigateToPayForm}>
          <div className='icon-container'> <FaWallet style={{ marginRight: '8px',  }} /></div>Pay
          </button>
           <div className='transfer-container' onClick={navigateToTransferForm}>
          <div className='icon-container'> <FaExchangeAlt style={{ marginRight: '8px',  }} /></div>Transfer money</div>
      </div>
    );
  }
  
  export default QuickActions;