import './BlackJackScreen.css';
import BlackJack from '../../assets/images/blackjack.gif';

export default () => {

  return (
    <>
      <div className='container'>
        <div>
          <div className='blackjack'>Congrats!</div>
        </div>
        <img src={BlackJack}/>
      </div>
      
    </>
  );
}