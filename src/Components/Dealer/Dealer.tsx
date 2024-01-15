import { useState } from "react";
import Card from "../Card/Card";
import { cardValues, cardSuits, getRandomValue, getRandomSuit } from "../Deck/Deck";
import './Dealer.css';

export type dealerProps = {
  cardOne: number[],
  cardTwo: number[],
  setDealerOutcome: Function,
  dealerScore: Function
}

export default (props: dealerProps) => {

  const cardOne: number[] = props.cardOne;
  let cardOneValue: number = cardOne[0];
  let cardOneSuit: number = cardOne[1];
  let cardOneID: number = cardOne[2];

  const cardTwo: number[] = props.cardTwo;
  let cardTwoValue: number = cardTwo[0];
  let cardTwoSuit: number = cardTwo[1];
  let cardTwoID: number = cardTwo[2];

  const dealerCards: JSX.Element = (
    <>
      <Card id = {cardOneID} value = {cardValues[cardOneValue]} suit = {cardSuits[cardOneSuit]}/>
      <Card id = {cardTwoID} value = {cardValues[cardTwoValue]} suit = {cardSuits[cardTwoSuit]}/>
    </>
  );

  const [dealerHand, setDealerHand] = useState(dealerCards)  
  
  const [dealerScore, setDealerScore] = useState(`${cardOneID + cardTwoID}`);

  console.log(cardOneID, cardTwoID)
  
  function dealerPlay() {
    // Dealer takes cards until 17 (soft or hard) and stops, if above 21, they bust 
    while (Number(dealerScore) < 17) {
      hit(
        dealerHand, 
        setDealerHand, 
        dealerScore, 
        setDealerScore
        );
    }
  }

  if (cardOneID == 1 || cardTwoID == 1) {

    if (dealerScore == "11" ) {
      console.log("Black Jack!");
      // props.setDealerOutcome('dealerBlackJack');
      setDealerScore("21");
      stand(props.dealerScore, dealerScore);
    } 
    
    else if (Number(dealerScore) < 21) {
      setDealerScore(`${dealerScore} / ${Number(dealerScore)+10}`);
      if (Number(dealerScore)+10 > 17) {
        stand(props.dealerScore, dealerScore);
      }
    } 

    else {
      setDealerScore(dealerScore);
    }
  }
  
  if (Number(dealerScore) > 21) {
    props.setDealerOutcome('dealerBust');
    stand(props.dealerScore, dealerScore);
  } 
  
  else if (Number(dealerScore) >= 17) {
    stand(props.dealerScore, dealerScore);
  }

  return (
    <>
      <div>
        <div className = 'cards'>
          {dealerHand}
        </div>

        <div className = 'score'> Score: {dealerScore}</div>
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

function hit(dealerHand: JSX.Element, 
             setDealerHand: Function,
             dealerScore: string,
             setDealerScore: Function) {

  const card: number[] = getCard();

  let cardValue: number = card[0];
  let cardSuit: number = card[1];
  let cardID: number = card[2];
 
  setDealerHand(
    <>
      {dealerHand}
      <Card id = {cardID} value = {cardValues[cardValue]} suit = {cardSuits[cardSuit]}/>
    </>
  );

  setDealerScore(`${Number(dealerScore)+cardID}`);
  
}

function stand(setDealerScore: Function, 
               dealerScore: string) {
  // no more cards -> move onto dealer 
  setDealerScore(Number(dealerScore));
}