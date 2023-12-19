import './Buttons.css';

export default () => {
  return (
    <div className='buttons'>
      <button className='double' onClick={()=>{
        // add one card and then stand and double money.
      }}>Double</button>
      
      <button className='hit' onClick={()=>{
        // add card
      }}>Hit</button>

      <button className='stand' onClick={()=>{
        // No cards
      }}>Stand</button>
    
    </div>
  );
}