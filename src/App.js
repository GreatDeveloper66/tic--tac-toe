import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: ["","X","O","","","","","",""]
    }
  }

  render(){
    return(
      <div className="App">
        <Status />
        <Board layout={this.state.squares} />
      </div>
    );
  }
}

class Board extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="Board">
        <Square status={this.props.layout[0]}/>
        <Square status={this.props.layout[1]}/>
        <Square status={this.props.layout[2]}/>
        <Square status={this.props.layout[3]}/>
        <Square status={this.props.layout[4]}/>
        <Square status={this.props.layout[5]}/>
        <Square status={this.props.layout[6]}/>
        <Square status={this.props.layout[7]}/>
        <Square status={this.props.layout[8]}/>
      </div>
    );
  }
}

class Status extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="Status">
        Status
      </div>
    );
  }
}

class Square extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="Square">
        {this.props.status}
      </div>
    );
  }
}


export default App;
