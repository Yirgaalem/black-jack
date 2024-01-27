import './PushScreen.css';
import Push from '../../assets/images/Push.gif';

export default () => {

  return (
    <>
      <div className='screenContainer'>
        <div>
          <div className='screen'>Push, guess that will do</div>
        </div>
        <img className='pushImage' src={Push}/>
      </div>
    </>
  );
}