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

  const [playerHand, setPlayerHand] = useState(playerCards)
  useEffect(()=> {

  },[]);

  const [playerScore, setPlayerScore] = useState(cardOneID + cardTwoID);
  
  return (
    <>
      <div>
        <div className = 'cards'>
          {/* <Card id = {cardOneID} value = {cardValues[cardOneValue]} suit = {cardSuits[cardOneSuit]}/>
          <Card id = {cardTwoID} value = {cardValues[cardTwoValue]} suit = {cardSuits[cardTwoSuit]}/> */}
          {playerHand}
        </div>

        <div className = 'score'> Score: {playerScore}</div>
      </div>

      <div className='buttons'>
        <button className='double' onClick={() => double(playerHand, 
                                                        setPlayerHand, 
                                                        playerScore, 
                                                        setPlayerScore)
                                                        }>Double</button> 
                                                      
        <button className='hit' onClick={() => hit(playerHand, 
                                                  setPlayerHand, 
                                                  playerScore,
                                                  setPlayerScore)
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


function double(playerHand: JSX.Element, 
                setPlayerHand: Function,
                playerScore: number,
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

  setPlayerScore(playerScore+cardID);
}

function hit(playerHand: JSX.Element, 
            setPlayerHand: Function,
            playerScore: number,
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
  setPlayerScore(playerScore+cardID);
}

function stand() {
// no more cards -> move onto dealer 
console.log('stand')
}

function split() {
// Split into two hands and double money
console.log('split')
}