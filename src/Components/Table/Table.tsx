import { useState } from 'react';
import Dealer from '../Dealer/Dealer';
import { getRandomValue, getRandomSuit } from "../Deck/Deck";
import Player from '../Player/Player';
import LoserScreen from '../Screens/LoserScreen';
import WinnerScreen from '../Screens/WinnerScreen';
import BlackJackScreen from '../Screens/BlackJackScreen';
import './Table.css';



export default () => {
  
  const [screen, setScreen] = useState('Playing');
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);

  const playerCardOne: number[] = getCard();
  const playerCardTwo: number[] = getCard();

  const dealerCardOne: number[] = getCard();
  const dealerCardTwo: number[] = getCard();
  
  let outcome: JSX.Element = (
    <>
    </>
  );

  if (screen == "BlackJack") {
    outcome = (
      <BlackJackScreen/>
    );
  } else if (screen == "Bust" || dealerScore > playerScore && screen != "dealerBust") {
    outcome = (
      <LoserScreen/>
    );
  } else if (screen == "Winner" || screen == "dealerBust" || playerScore > dealerScore) {
    outcome = (
      <WinnerScreen/>
    );
  }

  return (
    <>
    {outcome}
      <div className='dealerCards'>
       <Dealer cardOne={dealerCardOne}
               cardTwo={dealerCardTwo}
               setDealerOutcome={screen=> setScreen(screen)}
               dealerScore={dealerScore => setDealerScore(dealerScore)}
        />
      </div>
      
      <div>
        <Player cardOne={playerCardOne}
                cardTwo={playerCardTwo}
                setPlayerOutcome={screen => setScreen(screen)}
                playerScore={playerScore => setPlayerScore(playerScore)}
        />
      </div>
    </>
  );
}

function getCard(): number[] {
  let cardValue: number = getRandomValue();
  let cardSuit: number = getRandomSuit();
  let cardID: number = cardValue < 10 ? cardValue + 1 : 10;

  return [cardValue, cardSuit, cardID];
}