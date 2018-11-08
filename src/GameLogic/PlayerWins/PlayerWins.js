import React from 'react';
 import classes from '../../App.module.css';

const Winner = (props) => {
    const playerToken = props.appState.previousPlayer.symbol;
    const squares = props.appState.squares;
    console.log("Winner: ", playerToken, squares);
    if(RowWins(squares, playerToken))
    {     
      return <p className={classes.winmessage}>Player {playerToken} wins a row!</p>
    }
    else if(ColumnWins(squares, playerToken))
      return <p className={classes.winmessage}>Player {playerToken} wins a column!</p> 
    else if(DiagonalWins(squares, playerToken))
      return <p className={classes.winmessage}>Player {playerToken} wins diagonal!</p> 
    else
      return <p></p>
}

  const RowWins = (squares, playerToken) => {  
    let selectedRowIndex = 0;

    for(let square of squares)   
      if(square.clicked)      
        selectedRowIndex = square.rowIndex;      
         
    const startIndex = selectedRowIndex * 3;

    if((squares[startIndex].value === playerToken) &&
        (squares[startIndex+1].value === playerToken) &&
        (squares[startIndex+2].value === playerToken))
      return true;
    else
      return false;
  }

  const ColumnWins = (squares, playerToken) => {  
    let selectedColumnIndex = 0;

    for(let square of squares)   
      if(square.clicked)      
        selectedColumnIndex = square.columnIndex;           
       
    const startIndex = selectedColumnIndex;

    if((squares[startIndex].value === playerToken) &&
        (squares[startIndex+3].value === playerToken) &&
        (squares[startIndex+6].value === playerToken))
      return true;
    else
      return false;
  }

  const DiagonalWins = (squares, playerToken) => {  
    if(((squares[2].value === playerToken) &&
    (squares[4].value === playerToken) &&
    (squares[6].value === playerToken)) || 
    ((squares[0].value === playerToken) &&
      (squares[4].value === playerToken) &&
      (squares[8].value === playerToken)))
    return true;
      else
    return false;         
  }
  export default Winner;