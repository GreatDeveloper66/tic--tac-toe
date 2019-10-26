import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="App">
        <Status />
        <Board />
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
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
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
        Square
      </div>
    );
  }
}


export default App;
