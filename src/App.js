import React, { Component } from 'react';
import classes from './App.module.css';
import SquareField from "./SquareField/SquareField";
import PlayerWins from "./GameLogic/PlayerWins/PlayerWins";


class App extends Component { 

  restartGame = () => {
    return (
      console.log("Restart")
      // this.setState({squares:initSquares()})
    )
  }

  setGameOver = () => {
    alert("game over");
    this.setState({gameOver:true});
  }

  componentWillUpdate(nextState, nextProps) {
    console.log("componentWillUpdate");
  }

  render() {

    return (
      <div className={classes.App}>
      <h1>Tic Tac Toe for kidz</h1>
      <button onClick={this.restartGame} className={classes.button}>Spiel starten</button>
      <div className={classes.container}>
        <SquareField />
        {/* <PlayerWins gameOver={this.setGameOver} squares={this.state.squares} playerToken={this.state.activePlayer.symbol} />         */}
      </div>
      </div>
    );
  }
}

export default App;
