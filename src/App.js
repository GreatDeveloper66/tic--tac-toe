import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Status />
      <Board />
    </div>
  );
}

class Board extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="Board">
        Board
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


export default App;
