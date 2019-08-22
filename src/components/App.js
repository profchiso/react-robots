import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Hello from './Hello';


class App extends Component {
  render(){
  return (
    <div className="App">
      <header className="App-header ">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="tr">
          welcome to react
          <Card greeting={'chinedu'}/>
          <Hello welcome={'okorie'}/>
        </p>
      </header>
    </div>
  );
}
}

export default App;
