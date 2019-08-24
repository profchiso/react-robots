import React, {Component} from 'react';
import Todos from './Todos';
class TodoApp extends Component{
  constructor(){
    super();
    this.state={
      name:"chinedu",
      gender:"male",
      age:20
    }
  }
  handleChange=(e)=>{
   this.setState({name:e.target.value});
  };
  render(){
    return(
      <div>
        <h1>hi</h1>
        <Todos appState={this.state}  change ={this.handleChange}/>
      </div>
    );
  }
}
export default TodoApp;