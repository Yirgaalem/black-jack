import Card from "../Card/Card";
export const cardValues:string[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
export const cardSuits:string[] = ["♠︎", "♥︎", "♣︎", "♦︎"];

export default () => {
  
  let deck: Map<string, JSX.Element> = new Map();
  
  for (const value of cardValues) {
    for (const suit of cardSuits) {
      let id:number;
      
      if (value == 'A') {
        id = 1;
      } else if (value == 'J' || value == 'Q' || value == 'K') {
        id = 10;
      } else {
        id = parseInt(value);
      }

      let card: string = value + suit; 
      let cardComponent: JSX.Element = <Card id={id} value={value} suit={suit}/>
      deck.set(card, cardComponent)
    }
  }

  return deck;
}
export function getRandomValue(): number {

  return Math.floor(Math.random() * (cardValues.length - 1));
}

export function getRandomSuit(): number {
  return Math.floor(Math.random() * (cardSuits.length - 1));
}