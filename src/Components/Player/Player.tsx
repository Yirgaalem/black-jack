import { useState } from "react";
import Card from "../Card/Card";
import { cardValues, cardSuits, getRandomValue, getRandomSuit } from "../Deck/Deck";
import './Player.css'

export type playerProps = {
  cardOne: number[],
  cardTwo: number[],
  // setPlayerOutcome: Function,
  playerScore: Function,
  setDealerTurn: Function,
}

export default (props: playerProps) => {

  const cardOne: number[] = props.cardOne;
  const cardOneValue: number = cardOne[0];
  const cardOneSuit: number = cardOne[1];
  const cardOneID: number = cardOne[2];

  const cardTwo: number[] = props.cardTwo;
  const cardTwoValue: number = cardTwo[0];
  const cardTwoSuit: number = cardTwo[1];
  const cardTwoID: number = cardTwo[2];

  const playerCards: JSX.Element = (
    <>
      <Card id = {cardOneID} value = {cardValues[cardOneValue]} suit = {cardSuits[cardOneSuit]}/>
      <Card id = {cardTwoID} value = {cardValues[cardTwoValue]} suit = {cardSuits[cardTwoSuit]}/>
    </>
  );
  
  const [numCards, setNumCards] = useState(2);
  const [playerHand, setPlayerHand] = useState(playerCards)  

  const [playerScore, setPlayerScore] = useState(`${cardOneID + cardTwoID}`);


  if (cardOneID == 1 || cardTwoID == 1) {

    if (playerScore == "11") {
      // props.setPlayerOutcome('BlackJack');
      setPlayerScore("21");
      props.playerScore(0);
      props.setDealerTurn(true);
      stand(props.playerScore, playerScore, props.setDealerTurn);
    } 
    
    else if (Number(playerScore) < 21) {
      setPlayerScore(`${playerScore} / ${Number(playerScore)+10}`)
    } 

    else {
      setPlayerScore(playerScore)
    }
  }
  
  if (Number(playerScore) > 21) {
    stand(props.playerScore, playerScore, props.setDealerTurn);
  } 
  
  else if (Number(playerScore) == 21) {
    stand(props.playerScore, playerScore, props.setDealerTurn);
  }
  
  let splitButton: JSX.Element = (<button className='split' onClick={split}>Split</button>);;
  let doubleButton: JSX.Element = (<button className='double' onClick={() => double(numCards,
                                  setNumCards,
                                  playerHand, 
                                  setPlayerHand, 
                                  playerScore, 
                                  setPlayerScore,
                                  props.setDealerTurn,
                                  )
                                  }>Double</button> 
                                );

  if (numCards > 2) {
    splitButton = (<></>)
    doubleButton = (<></>)
  }
  
  return (
    <>
      <div>
        <div className = 'cards'>
          {playerHand}
        </div>

        <div className = 'score'> Score: {playerScore}</div>
      </div>

      <div className='buttons'>
        {doubleButton}
                                                      
        <button className='hit' onClick={() => hit(numCards,
                                                  setNumCards,
                                                  playerHand, 
                                                  setPlayerHand, 
                                                  playerScore, 
                                                  setPlayerScore
                                                  )
                                                  }>Hit</button>

        <button className='stand' onClick={() => stand(setPlayerScore, playerScore, props.setDealerTurn)}>Stand</button>

        {splitButton}
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

function double(numCards: number,
                setNumCards: Function,
                playerHand: JSX.Element, 
                setPlayerHand: Function,
                playerScore: string,
                setPlayerScore: Function,
                setDealerTurn: Function) {
// add one card and then stand and double money. move onto dealer after.
  const card: number[] = getCard();

  let cardValue: number = card[0];
  let cardSuit: number = card[1];
  let cardID: number = card[2];
 
  setPlayerHand(
    <>
      {playerHand}
      <Card id = {cardID} value = {cardValues[cardValue]} suit = {cardSuits[cardSuit]}/>
    </>
  );

  setPlayerScore(`${Number(playerScore)+cardID}`);

  setNumCards(numCards + 1);
  stand(setPlayerScore, playerScore, setDealerTurn);
}

function hit(numCards: number,
             setNumCards: Function,
             playerHand: JSX.Element, 
             setPlayerHand: Function,
             playerScore: string,
             setPlayerScore: Function) {

  const card: number[] = getCard();

  let cardValue: number = card[0];
  let cardSuit: number = card[1];
  let cardID: number = card[2];
 
  setPlayerHand(
    <>
      {playerHand}
      <Card id = {cardID} value = {cardValues[cardValue]} suit = {cardSuits[cardSuit]}/>
    </>
  );

  setPlayerScore(`${Number(playerScore)+cardID}`);
  
  setNumCards(numCards + 1);
}

function stand(setPlayerScore: Function, 
               playerScore: string,
               setDealerTurn: Function) {
  setPlayerScore(Number(playerScore));
  setDealerTurn(true);
}

function split() {
  // Split into two hands and double money
  console.log('split');
}

