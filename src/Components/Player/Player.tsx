import Card from "../Card/Card";
import { cardValues, cardSuits, getRandomValue, getRandomSuit } from "../Deck/Deck";
import './Player.css'

export default () => {

  let cardOneValue: number = getRandomValue();
  let cardOneSuit: number = getRandomSuit();
  let cardOneID: number = cardOneValue < 10 ? cardOneValue + 1 : 10;

  let cardTwoValue: number = getRandomValue();
  let cardTwoSuit: number = getRandomSuit();
  let cardTwoID: number = cardTwoValue < 10 ? cardTwoValue + 1 : 10;

  
  return (
    <div>
      <div className = 'cards'>
        <Card id = {cardOneID} value = {cardValues[cardOneValue]} suit = {cardSuits[cardOneSuit]}/>
        <Card id = {cardTwoID} value = {cardValues[cardTwoValue]} suit = {cardSuits[cardTwoSuit]}/>
      </div>

      <div className = 'score'> Score: {cardOneID + cardTwoID}</div>
    </div>
  );
}