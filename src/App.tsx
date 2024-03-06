import { getRandomValue, getRandomSuit} from './Components/Deck/Deck';
import Table from './Components/Table/Table';
import './App.css';
import { useState } from 'react';

export default () => {
  const playerCardOne: number[] = getCard();
  const playerCardTwo: number[] = getCard();

  const dealerCardOne: number[] = getCard();
  const dealerCardTwo: number[] = getCard();

  /*
  ADD WHEN FINISHED
  const initialPage: JSX.Element = (
  <>
    <div className='title'>BlackJack !</div>
    <button onClick={()=> setPageToDisplay(<Table playerCardOne={playerCardOne}
         playerCardTwo={playerCardTwo}
         dealerCardOne={dealerCardOne}
         dealerCardTwo={dealerCardTwo}/>)}>Play</button>
  </>
  );
  */
 const initialPage: JSX.Element = (
    <Table playerCardOne={playerCardOne}
           playerCardTwo={playerCardTwo}
           dealerCardOne={dealerCardOne}
           dealerCardTwo={dealerCardTwo}/>
 );

  const [pageToDisplay, setPageToDisplay] = useState(initialPage);

  return (
    <>
      {pageToDisplay}
    </>
  );
}
function getCard(): number[] {
  let cardValue: number = getRandomValue();
  let cardSuit: number = getRandomSuit();
  let cardID: number = cardValue < 10 ? cardValue + 1 : 10;

  return [cardValue, cardSuit, cardID];
}