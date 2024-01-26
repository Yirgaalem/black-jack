import './PushScreen.css';
import Push from '../../assets/images/Push.gif';

export default () => {

  return (
    <>
      <div className='container'>
        <div>
          <div className='push'>Push, guess that will do</div>
        </div>
        <img src={Push}/>
      </div>
      
    </>
  );
}