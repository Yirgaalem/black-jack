import Card from "../Card/Card";

export default () => {
  const values:string[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const suits:string[] = ["♠︎", "♥︎", "♣︎", "♦︎"];

  let deck: Map<string, JSX.Element> = new Map();
  
  for (const value of values) {
    for (const suit of suits) {
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