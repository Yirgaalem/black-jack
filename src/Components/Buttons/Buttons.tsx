import './Buttons.css';

export default () => {
  return (
    <div className='buttons'>
      <button className='double' onClick={double}>Double</button>
      
      <button className='hit' onClick={hit}>Hit</button>

      <button className='stand' onClick={stand}>Stand</button>

      <button className='split' onClick={split}>Split</button>

    </div>
  );
}
function double() {
  // add one card and then stand and double money. move onto dealer after.
  console.log('double')
}

function hit() {
  // add one card
  console.log('hit')
}

function stand() {
  // no more cards -> move onto dealer 
  console.log('stand')
}

function split() {
  // Split into two hands and double money
  console.log('split')
}