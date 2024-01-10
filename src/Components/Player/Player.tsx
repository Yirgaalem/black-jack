import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { cardValues, cardSuits, getRandomValue, getRandomSuit } from "../Deck/Deck";
import './Player.css'

export default () => {

  const cardOne: number[] = getCard();
  let cardOneValue: number = cardOne[0];
  let cardOneSuit: number = cardOne[1];
  let cardOneID: number = cardOne[2];

  const cardTwo: number[] = getCard();
  let cardTwoValue: number = cardTwo[0];
  let cardTwoSuit: number = cardTwo[1];
  let cardTwoID: number = cardTwo[2];

  const playerCards: JSX.Element = (
    <>
      <Card id = {cardOneID} value = {cardValues[cardOneValue]} suit = {cardSuits[cardOneSuit]}/>
      <Card id = {cardTwoID} value = {cardValues[cardTwoValue]} suit = {cardSuits[cardTwoSuit]}/>
    </>
  );
  const [numCards, setNumCards] = useState(0);
  const [playerHand, setPlayerHand] = useState(playerCards)  
  
  const [playerScore, setPlayerScore] = useState(`${cardOneID + cardTwoID}`);

  console.log(cardOneID, cardTwoID)

  if (cardOneID == 1 || cardTwoID == 1) {

    if (playerScore == "11" ) {
      //setScreen to black Jack
      console.log("Black Jack!");
      setPlayerScore("21");
    } 
    
    else if (Number(playerScore) < 21) {
      setPlayerScore(`${playerScore} / ${Number(playerScore)+10}`)
    } 

    else {
      setPlayerScore(playerScore)
    }
  }
  
  if (Number(playerScore) > 21) {
    // setScreen to loser
    console.log("Bust");
  } 
  
  else if (Number(playerScore) == 21) {
    // setScreen to winner
    console.log("dont allow more hits");
  }

  //can use numCards to determine when user can double and split (if num Cards == 2) and see if it is a black jack or just 21 (if we need to)
  return (
    <>
    
      <div>
        <div className = 'cards'>
          {playerHand}
        </div>

        <div className = 'score'> Score: {playerScore}</div>
      </div>

      <div className='buttons'>
        <button className='double' onClick={() => double(numCards,
                                                        setNumCards,
                                                        playerHand, 
                                                        setPlayerHand, 
                                                        playerScore, 
                                                        setPlayerScore
                                                        )
                                                        }>Double</button> 
                                                      
        <button className='hit' onClick={() => hit(numCards,
                                                  setNumCards,
                                                  playerHand, 
                                                  setPlayerHand, 
                                                  playerScore, 
                                                  setPlayerScore
                                                  )
                                                  }>Hit</button>

        <button className='stand' onClick={stand}>Stand</button>

        <button className='split' onClick={split}>Split</button>
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
                setPlayerScore: Function) {
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

function stand() {
// no more cards -> move onto dealer 
console.log('stand')
}

function split() {
// Split into two hands and double money
console.log('split')
}