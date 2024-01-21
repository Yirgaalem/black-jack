import { useState } from 'react';
import Dealer from '../Dealer/Dealer';
import { getRandomValue, getRandomSuit } from "../Deck/Deck";
import Player from '../Player/Player';
import LoserScreen from '../Screens/LoserScreen';
import WinnerScreen from '../Screens/WinnerScreen';
import BlackJackScreen from '../Screens/BlackJackScreen';
import './Table.css';

export default () => {
  
  // const [playerOutcome, setPlayerOutcome] = useState('Playing');
  // const [dealerOutcome, setDealerOutcome] = useState()
  const [playerScore, setPlayerScore] = useState(-1);
  const [dealerScore, setDealerScore] = useState(-1);

  const playerCardOne: number[] = getCard();
  const playerCardTwo: number[] = getCard();

  const dealerCardOne: number[] = getCard();
  const dealerCardTwo: number[] = getCard();
  
  let outcome: JSX.Element = (
    <>
    </>
  );

  // if (playerOutcome == "BlackJack") {
  //   outcome = (
  //     <BlackJackScreen/>
  //   );
  // } else if (playerOutcome == "Bust" || dealerScore > playerScore && playerOutcome != "dealerBust") {
  //   outcome = (
  //     <LoserScreen/>
  //   );
  // } else if (playerOutcome == "Winner" || playerOutcome == "dealerBust" || playerScore > dealerScore) {
  //   outcome = (
  //     <WinnerScreen/>
  //   );
  // }

  // Will use 0 as black jack value 
  if (playerScore == 0) {
    outcome = (
      <BlackJackScreen/>
    );
  } else if (playerScore > 21 || playerScore < dealerScore && dealerScore <= 21) {
    console.log(dealerScore, playerScore)
    outcome = (
      <LoserScreen/>
    );
  } else if (playerScore > dealerScore && playerScore >= 21 || dealerScore > 21 && playerScore <= 21) {
    outcome = (
      <WinnerScreen/>
    );
  }

  const [dealerTurn, setDealerTurn] = useState(false);

  return (
    <>
    {outcome}
      <div className='dealerCards'>
       <Dealer cardOne={dealerCardOne}
               cardTwo={dealerCardTwo}
              //  setDealerOutcome={playerOutcome => setPlayerOutcome(playerOutcome)}
               dealerScore={dealerScore => setDealerScore(dealerScore)}
               dealerTurn={dealerTurn => setDealerTurn(dealerTurn)}
        />
      </div>
      
      <div>
        <Player cardOne={playerCardOne}
                cardTwo={playerCardTwo}
                // setPlayerOutcome={playerOutcome => setPlayerOutcome(playerOutcome)}
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