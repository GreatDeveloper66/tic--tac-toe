import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      message: "Pick a Square",
      gameOver: false
    }
    this.clickSquare = this.clickSquare.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  clickSquare(i) {
    const squares = this.state.squares.slice();
    function findWin(squares) {
      let squaresCopy = squares.slice();
      for (let i = 0; i < 9; i++) {
        if (squaresCopy[i] === "") {
          squaresCopy[i] = 'O';
          if (calculateWinner(squaresCopy)) {
            return i;
          } else {
            squaresCopy[i] = "";
          }
        }
      }
      return null;
    }
    function findBlock(squares) {
      let squaresCopy = squares.slice();
      for (let i = 0; i < 9; i++) {
        if (squaresCopy[i] === "") {
          squaresCopy[i] = 'X';
          if (calculateWinner(squaresCopy)) {
            return i;
          } else {
            squaresCopy[i] = "";
          }
        }
      }
      return null;
    }
    function findRandom(squares) {
      let randomNum;
      do {
        randomNum = Math.floor(Math.random() * 9);
      } while (squares[randomNum] !== "");
      return randomNum;
    }

    const findSquare = squares => findWin(squares) || findBlock(squares) || findRandom(squares);

    if (squares[i] === "" && !this.state.gameOver) {
      squares[i] = 'X'
      if (squares.includes("")) {
        squares[findSquare(squares)] = 'O';
      }

      let winner = calculateWinner(squares);

      let winnerMessage = winner
        ? winner.toString() + " is the winner"
        : !squares.includes("")
          ? "It was a draw"
          : "Pick a Square";
      let gameOver = !squares.includes("") || winner;
      this.setState({squares: squares, message: winnerMessage, gameOver: gameOver});

    }
  }
  handleReset() {
    this.setState({
      squares: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      message: "Pick a Square",
      gameOver: false
    })
  }

  render() {
    return (<div className="App">
      <div className = "header">
        Tic-Tac-Toe
      </div>
      <div className="Status">
        {this.state.message}
        <button onClick={this.handleReset}>Reset</button>
      </div>
      <div className="Board">
        <Square status={this.state.squares[0]} onClick={() => this.clickSquare(0)}/>
        <Square status={this.state.squares[1]} onClick={() => this.clickSquare(1)}/>
        <Square status={this.state.squares[2]} onClick={() => this.clickSquare(2)}/>
        <Square status={this.state.squares[3]} onClick={() => this.clickSquare(3)}/>
        <Square status={this.state.squares[4]} onClick={() => this.clickSquare(4)}/>
        <Square status={this.state.squares[5]} onClick={() => this.clickSquare(5)}/>
        <Square status={this.state.squares[6]} onClick={() => this.clickSquare(6)}/>
        <Square status={this.state.squares[7]} onClick={() => this.clickSquare(7)}/>
        <Square status={this.state.squares[8]} onClick={() => this.clickSquare(8)}/>
      </div>
    </div>);
  }
}

class Square extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div className="Square" onClick={this.props.onClick}>
      {this.props.status}
    </div>);
  }
}

function calculateWinner(squares) {
  const lines = [
    [
      0, 1, 2
    ],
    [
      3, 4, 5
    ],
    [
      6, 7, 8
    ],
    [
      0, 3, 6
    ],
    [
      1, 4, 7
    ],
    [
      2, 5, 8
    ],
    [
      0, 4, 8
    ],
    [
      2, 4, 6
    ]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
