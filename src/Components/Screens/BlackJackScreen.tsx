import './BlackJackScreen.css';
import BlackJack from '../../assets/images/blackjack.gif';

export default () => {

  return (
    <>
      <div className='screenContainer'>
        <div>
          <div className='blackjack'>Congrats!</div>
        </div>
        <img className='blackJackImage' src={BlackJack}/>
      </div>
      
    </>
  );
}