import './WinnerScreen.css';
import winner from '../../assets/images/winner.gif';

export default () => {

  return (
    <>
      <div className='screenContainer'>
        <div>
          <div className='screen'>Winner!</div>
        </div>
        <div>  
          <div>Good thing this isn't real money, so I don't have to pay you!</div>
        </div>
        <img className='winnerImage' src={winner}/>
      </div>
      
    </>
  );
}

