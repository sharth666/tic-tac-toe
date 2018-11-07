import React, { Component } from 'react';
import classes from './App.module.css';
import Square from "./Square/Square";
import PlayerWins from "./GameLogic/PlayerWins/PlayerWins";

const initSquares = () => {
  const squares = []; 
  for(let i=0; i < 9; i++)
  {
    let rowIndex = 0;
    if(i >= 3 && i <= 5)
      rowIndex = 1;
    else if(i >= 6)
      rowIndex = 2;
    let columnIndex = 0;
    if(i % 3 === 0)
      columnIndex = 0;
    else if((i === 1) || (i === 4) || (i === 7))
      columnIndex = 1;
    else if((i === 2) || (i === 5) || (i === 8))
      columnIndex = 2;
    squares.push({rowIndex:rowIndex, columnIndex:columnIndex, id:i, value: "", clicked:false});
  } 
  return squares;
}

const initialState = {
  squares: initSquares(),
  players: [{name: "Rainer", active:true, symbol:"X"}, {name: "Lotta", active:false, symbol:"0"}],
  activePlayer: {name: "Rainer", active:true, symbol:"X"},
  gameOver: false
}

class App extends Component { 

  restartGame = () => {
    return (
      this.setState({squares:initSquares()})
    )
  }

  state = initialState;

  clickSquareHandler = (id) => {   
    let squares = [...this.state.squares];    
    const players = [...this.state.players];  
    
    if(squares[id].value === "")
    {
      squares = this.resetClickedSquares(squares);
      
      const activePlayer = players.find((player) => {
        return player.active === true;       
      });

      this.setState({activePlayer:activePlayer});
      
      
      squares[id].value = activePlayer.symbol;
      squares[id].clicked = true;

      this.setState({squares:squares});      

      const updatedPlayers = players.map(player => {
        if(player.active)
          player.active = false;
        else
          player.active = true;
        return player;
      })

      this.setState({players:updatedPlayers}); 
    }
  }

  initSquareField = () => {
    console.log("initSquareField");
    let squareField = [];
    const squares = this.state.squares;

    squareField = squares.map(square => {
      return (<Square key={square.id} 
              click={this.clickSquareHandler.bind(this, square.id)} 
              value={square.value}/>)
      })
    return squareField;
  }

  resetClickedSquares = (squares) => {
    const updatesSquares = squares.map(square => {
      square.clicked = false;
     return square;
    })
    return updatesSquares;
  }

  setGameOver = () => {
    alert("game over");
    this.setState({gameOver:true});
  }


  render() {

    return (
      <div className={classes.App}>
      <h1>Tic Tac Toe for kidz</h1>
      <button onClick={this.restartGame} className={classes.button}>Spiel starten</button>
      <div className={classes.container}>
        {this.initSquareField()}
        {console.log("new rendered")}
        <PlayerWins gameOver={this.setGameOver} squares={this.state.squares} playerToken={this.state.activePlayer.symbol} />        
      </div>
      </div>
    );
  }
}

export default App;
