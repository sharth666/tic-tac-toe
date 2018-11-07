import React,  {Component} from 'react';
import Square from './Square/Square'


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

    class SquareField extends React.Component {
        constructor(props) {
            console.log("SquareField constructor");
            super(props);
            this.state = ({
                squares: initSquares(),
                players: [{name: "Rainer", active:true, symbol:"X"}, {name: "Lotta", active:false, symbol:"0"}],
                activePlayer: {name: "Rainer", active:true, symbol:"X"},
                gameOver: false
            })
        }


    resetClickedSquares = (squares) => {
        const updatedSquares = squares.map(square => {
            square.clicked = false;
            return square;
        })
        return updatedSquares;
        }


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
        console.log(squareField);            
        return squareField;
        }


    render() {
        {this.initSquareField};
        return <div></div>

    }
}

export default SquareField;