import { useState } from 'react';
import Dealer from '../Dealer/Dealer';
import { getRandomValue, getRandomSuit } from "../Deck/Deck";
import Player from '../Player/Player';
import LoserScreen from '../Screens/LoserScreen';
import WinnerScreen from '../Screens/WinnerScreen';
import BlackJackScreen from '../Screens/BlackJackScreen';
import PushScreen from '../Screens/PushScreen';
import './Table.css';

export default () => {

  const [playerScore, setPlayerScore] = useState(-1);
  const [dealerScore, setDealerScore] = useState(-1);

  const playerCardOne: number[] = getCard();
  const playerCardTwo: number[] = getCard();

  const dealerCardOne: number[] = getCard();
  const dealerCardTwo: number[] = getCard();
  
  const [dealerTurn, setDealerTurn] = useState(false);

  let outcome: JSX.Element = (
    <>
    </>
  );

  if (dealerTurn == true) {
    // Will use 0 as black jack value 
    if (playerScore == 0) {
      outcome = (
        <BlackJackScreen/>
      );
    } else if (playerScore > 21 || playerScore < dealerScore && dealerScore <= 21) {
      outcome = (
        <LoserScreen/>
      );
    } else if (playerScore > dealerScore && playerScore <= 21 || dealerScore > 21 && playerScore <= 21) {
      outcome = (
        <WinnerScreen/>
      );
    } else if (playerScore == dealerScore && playerScore <= 21 && dealerScore <= 21) {
      outcome = (
        <PushScreen/>
      )
    }
  }

  console.log(playerScore, dealerScore);

  return (
    <>
    {outcome}
      <div className='dealerCards'>
       <Dealer cardOne={dealerCardOne}
               cardTwo={dealerCardTwo}
               dealerScore={dealerScore => setDealerScore(dealerScore)}
               dealerTurn={dealerTurn}
        />
      </div>
      
    
      <div className='playerCards'>
        <Player cardOne={playerCardOne}
                cardTwo={playerCardTwo}
                playerScore={playerScore => setPlayerScore(playerScore)}
                setDealerTurn={dealerTurn => setDealerTurn(dealerTurn)}
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