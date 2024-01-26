import './LoserScreen.css';
import loser from '../../assets/images/loser.gif';

export default () => {

  return (
    <>
      <div className='container'>
        <div>
          <div className='screen'>Loser!</div>
        </div>
        <div>  
          <div>Thanks for the money</div>
        </div>
        <img src={loser}/>
      </div>
      
    </>
  );
}