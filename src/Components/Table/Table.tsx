import { useState } from 'react';
import Dealer from '../Dealer/Dealer';
import Player from '../Player/Player';
import cardBack from '../../assets/images/card-back.png';
import LoserScreen from '../Screens/LoserScreen';
import WinnerScreen from '../Screens/WinnerScreen';
import BlackJackScreen from '../Screens/BlackJackScreen';
import PushScreen from '../Screens/PushScreen';
import './Table.css';

export type tableProps = {
  playerCardOne: number[],
  playerCardTwo: number[],
  dealerCardOne: number[], 
  dealerCardTwo: number[],
}

export default (props: tableProps) => {

  const [playerScore, setPlayerScore] = useState(-1);
  const [dealerScore, setDealerScore] = useState(-1);
 
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


  return (
    <>
      {outcome}
      <div className='dealerCards'>
       <Dealer cardOne={props.dealerCardOne}
               cardTwo={props.dealerCardTwo}
               dealerScore={dealerScore => setDealerScore(dealerScore)}
               dealerTurn={dealerTurn}
        />
      </div>
      
      <img className='cardBack' src={cardBack}/>

        <Player cardOne={props.playerCardOne}
                cardTwo={props.playerCardTwo}
                playerScore={playerScore => setPlayerScore(playerScore)}
                setDealerTurn={dealerTurn => setDealerTurn(dealerTurn)}
        />
    </>
  );
}

