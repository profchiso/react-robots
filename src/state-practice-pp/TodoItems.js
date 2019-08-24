import React,{Component} from 'react';

class TodoItems extends Component{

  render(){
    console.log(this.props);
    
    return(
      <div>
          <ul>
            <li>goto church {this.props.todosProps.appState.name}</li>
            <li> visit my brother</li>
          </ul>
          <input onChange={this.props.changeE} type="text" placeholder="Enter your name"></input>
          <input onChange={this.props.changeE} type="text" placeholder="Enter your name"></input>
      </div>
    );
  }
}
export default TodoItems;