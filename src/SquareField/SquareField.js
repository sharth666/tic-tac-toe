import React,  {Component} from 'react';
import Square from './Square/Square'

class SquareField extends React.Component {
    constructor(props) {
        console.log("SquareField constructor");
        super(props);
        console.log(this.state);
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


    render() {
        return (
           this.state.squares.map(square => {
                return (<Square key={square.id} 
                        click={this.clickSquareHandler.bind(this, square.id)} 
                        value={square.value}/>)
                })
        )
    }
}

export default SquareField;