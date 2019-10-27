import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: ["","X","O","","","","","",""]
    }
    this.clickSquare = this.clickSquare.bind(this);
  }
  clickSquare(i){
    window.alert("hello hello hello");
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  render(){
    return(
      <div className="App">
        <Status />
        <Board layout={this.state.squares} onClick={() => this.clickSquare(0)}/>
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
      <div className="Board" onClick={this.props.onClick}>
        <Square status={this.props.layout[0]} />
        <Square status={this.props.layout[1]} />
        <Square status={this.props.layout[2]} />
        <Square status={this.props.layout[3]} />
        <Square status={this.props.layout[4]} />
        <Square status={this.props.layout[5]} />
        <Square status={this.props.layout[6]} />
        <Square status={this.props.layout[7]} />
        <Square status={this.props.layout[8]} />
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
