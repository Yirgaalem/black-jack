import Dealer from '../Dealer/Dealer';
import Player from '../Player/Player';
import LoserScreen from '../Screens/LoserScreen';
import WinnerScreen from '../Screens/WinnerScreen';
import BlackJackScreen from '../Screens/BlackJackScreen';
import './Table.css';


export default () => {
  
  // const [screen, setScreen] = useState();

  return (
    <>
      {/* <LoserScreen/>
      <WinnerScreen/>
      <BlackJackScreen/> */}
      <div className='dealerCards'>
       <Dealer/>
      </div>
      
      <div>
        <Player/>
      </div>
    </>
  );
}

