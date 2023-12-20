import Buttons from '../Buttons/Buttons';
import Dealer from '../Dealer/Dealer';
import Player from '../Player/Player';
import './Table.css'

export default () => {

  return (
    <>
      <div className='dealerCards'>
       <Dealer/>
      </div>
      
      <div>
        <Player/>
      </div>
{/*       
      <div>
        <Buttons/>
      </div> */}
    </>
  );
}

