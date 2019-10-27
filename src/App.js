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
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    let randomNum;
    do {
      randomNum = Math.floor(Math.random()*9);
    }
    while(squares[randomNum] !== "");
    squares[randomNum] = 'O';

    this.setState({squares: squares});
  }

  render(){
    return(
      <div className="App">
        <div className="Status">
          Status
        </div>
        <div className="Board" >
            <Square status={this.state.squares[0]} onClick={() => this.clickSquare(0)} />
            <Square status={this.state.squares[1]} onClick={() => this.clickSquare(1)}/>
            <Square status={this.state.squares[2]} onClick={() => this.clickSquare(2)}/>
            <Square status={this.state.squares[3]} onClick={() => this.clickSquare(3)}/>
            <Square status={this.state.squares[4]} onClick={() => this.clickSquare(4)}/>
            <Square status={this.state.squares[5]} onClick={() => this.clickSquare(5)}/>
            <Square status={this.state.squares[6]} onClick={() => this.clickSquare(6)}/>
            <Square status={this.state.squares[7]} onClick={() => this.clickSquare(7)}/>
            <Square status={this.state.squares[8]} onClick={() => this.clickSquare(8)}/>
        </div>
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
      <div className="Square" onClick={this.props.onClick}>
        {this.props.status}
      </div>
    );
  }
}


export default App;
