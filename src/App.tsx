import Table from './Components/Table/Table';
import './App.css';
import { useState } from 'react';

export default () => {
  const initialPage: JSX.Element = (
  <>
    <div className='title'>BlackJack !</div>
    <button onClick={()=> setPageToDisplay(<Table/>)}>Play</button>
  </>
  );
  
  const [pageToDisplay, setPageToDisplay] = useState(initialPage);

  // setTimeout(() => {
  //   setPageToDisplay(<Table/>);
  // }, 2200);

  console.log("h")
  return (
    <>
      {pageToDisplay}
    </>
  );
}
