import Table from './Components/Table/Table';
import './App.css';
import { useState } from 'react';

export default () => {
  const initialPage: JSX.Element = (
  // <>
  //   <div className='title'>BlackJack !</div>
  //   <button onClick={()=> setPageToDisplay(<Table/>)}>Play</button>
  // </>
  <Table/>
  );
  
  const [pageToDisplay, setPageToDisplay] = useState(initialPage);

  return (
    <>
      {pageToDisplay}
    </>
  );
}
