import React,{Component} from 'react';
import CardList from '../robot-app/CardList';
import {Robot} from '../robot-app/robots';
import SearchBox from '../robot-app/SearchBox';

class App extends Component{
  constructor(){
    super();
  
this.state={
  robots:Robot,
  searchbox: ""
}
  }
  render(){
    return(
      <div className="tc">
        <h1>Robots</h1>
        <SearchBox />
        <CardList  robot={Robot}/>
      </div>
    );

  }
  
}
export default App;