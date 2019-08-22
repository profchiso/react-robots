import React from 'react';
import CardList from './CardList';
import {Robot} from '../robots';
import SearchBox from './SearchBox';

const App =()=>{
  return(
    <div className="tc">
      <h1>Robots</h1>
      <SearchBox />
      <CardList  robot={Robot}/>
    </div>
  );
}
export default App;