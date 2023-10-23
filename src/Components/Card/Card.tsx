import './Card.css';

export type cardProps = {
  id: number;
  value: string;
  suit: string;    
}

export default (props: cardProps) => {
  
  let cardColour: string = 'card card-red'
  if (props.suit == '♠︎' || props.suit == '♣︎') {
    cardColour = ' card card-black'
  }

  return (
    <>
      <div className={cardColour}><div className="card-down"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div>
      <div className="card-up"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div></div>
    </>
  );
}