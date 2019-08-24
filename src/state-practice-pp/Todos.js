import React, {Component} from "react";
import TodoItems from './TodoItems'

class Todos extends Component{
  render(){
    //console.log(this.props);
    //console.log(this.props.change);
    return(
      <div>
        <h1>welcome {this.props.appState.name}</h1>
        <TodoItems todosProps={this.props} changeE={this.props.change} />
      </div>
    )
  }
}
export default Todos;