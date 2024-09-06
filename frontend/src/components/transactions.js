import '../css-styles/transactions.css';
import {transactions} from '../data/transactionData';
 const Transactions =()=>{
  return (
    <div className='tran-container'>
      <h3 className='title'>Transaction History</h3>
      <div className='transactions'>
        {transactions.map((tran) => (
          <div className='tran-details' key={tran.id}>
            <div className='tran-info'>
              <p className='tran-type'>{tran.tranType}</p>
              <p className='tran-card'>...{tran.card}</p>
            </div>
            <p className='tran-money'>{tran.moneyAmount}</p>
            <p className='tran-date'>{tran.dateOfTran}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
 }

 export default Transactions;