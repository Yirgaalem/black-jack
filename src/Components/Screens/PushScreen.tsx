import './PushScreen.css';
import Push from '../../assets/images/Push.gif';

export default () => {

  return (
    <>
      <div className='container'>
        <div>
          <div className='screen'>Push, guess that will do</div>
        </div>
        <img src={Push}/>
      </div>
    </>
  );
}