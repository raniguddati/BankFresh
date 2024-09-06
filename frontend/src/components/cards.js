import '../css-styles/cards.css';
import { cards } from '../data/cardsData';
import { FaChevronRight } from 'react-icons/fa';
import QuickActions from '../components/quickActions';
import { useState } from 'react';

const Cards = () => {
  const [cardIndex, setCardIndex] = useState(0);

  const handleNextCard = () => {
    setCardIndex((cardIndex + 1) % cards.length);
  };

  const currentCard = cards[cardIndex];

  return (
    <>
      <div className='cards'>
        <div className='title-container'>
          <h3 className='title'>Cards</h3>
        </div>
        <div className='button-container'>
          <button className='to-right-arrowBtn' type='button' onClick={handleNextCard}>
            <FaChevronRight />
          </button>
        </div>
        <div className='card-container'>
          <div className='card-details' key={currentCard.id}>
            <p className='card-type'>{currentCard.cardType}</p>
            <h3 className='card-balance'>{currentCard.value}</h3>
            <div className='card-digits'>
              <span className='card-number'>**** **** ****{currentCard.cardNo}</span>
              <span className='card-exDate'>{currentCard.expiryDate}</span>
            </div>
          </div>
        </div>
        <div className='quick-actions'>
          <QuickActions />
        </div>
      </div>
    </>
  );
};

export default Cards;
