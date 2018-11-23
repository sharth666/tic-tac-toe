import React, { Component } from 'react';
import classes from './App.module.css';
import SquareField from "./SquareField/SquareField";
import Player from "./Players/Player/Player";
import Winner from "./GameLogic/PlayerWins/PlayerWins";


const initSquares = () => {
  const squares = [];
  for (let i = 0; i < 9; i++) {
    let rowIndex = 0;
    if (i >= 3 && i <= 5)
      rowIndex = 1;
    else if (i >= 6)
      rowIndex = 2;
    let columnIndex = 0;
    if (i % 3 === 0)
      columnIndex = 0;
    else if ((i === 1) || (i === 4) || (i === 7))
      columnIndex = 1;
    else if ((i === 2) || (i === 5) || (i === 8))
      columnIndex = 2;
    squares.push({ rowIndex: rowIndex, columnIndex: columnIndex, id: i, value: "", clicked: false });
  }
  return squares;
}


class App extends Component {
  state = ({
    squares: initSquares(),
    players: [{ name: "Rainer", active: true, symbol: "X" }, { name: "Lotta", active: false, symbol: "0" }],
    activePlayer: { name: "Rainer", active: true, symbol: "X" },
    previousPlayer: { name: "", active: false, symbol: "" },
    gameOver: false
  })

  restartGame = () => {
    const squares = this.state.squares;
    console.log("Restart")
    this.setState({ squares: initSquares() })
  }

  setGameOver = () => {
    alert("game over");
    this.setState({ gameOver: true });
  }

  nextPlayer = (currentPlayer) => {
    let nextPlayer = null;
    const players = this.state.players;
    players.forEach(player => {
      if (player.symbol !== currentPlayer.symbol)
        nextPlayer = player;
    })
    this.setState({ activePlayer: nextPlayer, previousPlayer: currentPlayer });
  }


  render() {
    return (      
      
      <div className={classes.App}>
        <h1>Tic Tac Toe for kidz</h1>
        <button onClick={this.restartGame} className={classes.button}>Spiel starten</button>        
        <div className={classes.container}>     
           <canvas className={classes.line}></canvas>     
          <SquareField nextPlayer={currentPlayer => this.nextPlayer(currentPlayer)} appState={this.state} />
        </div>
        <Player activePlayer={this.state.activePlayer} />
        <Winner gameOver={this.setGameOver} appState={this.state} />
      </div>
    );
  }
}

export default App;
