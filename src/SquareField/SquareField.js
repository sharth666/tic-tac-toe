import React,  {Component} from 'react';
import Square from './Square/Square'

class SquareField extends React.Component {    
    constructor(props) {   
        super(props);
        this.state = props.appState;
    }

    componentWillUpdate(nextState, nextProps) {        
 
      }

    resetClickedSquares = (squares) => {
        const updatedSquares = squares.map(square => {
            square.clicked = false;
            return square;
        })
        return updatedSquares;
    }

    
    getDivPosition = () => {
        const squareSize =  this.currentSquare.getBoundingClientRect();
        console.log("Size: ", squareSize);
        const canvas = document.querySelector('canvas');
        // const testDiv = document.querySelector('.container');
        const context = canvas.getContext('2d');
    

        context.clearRect(0,0,canvas.width,canvas.height);
        context.beginPath();
        context.moveTo(50, 0);
        console.log("Bottom: ", squareSize.bottom);
        context.lineTo(squareSize.width + 8, squareSize.bottom);
        context.strokeStyle = "black";
        context.shadowOffsetY = 4;
        context.shadowBlur    = 4;
        context.shadowColor   = "gray";
        context.stroke();

      }


    clickSquareHandler = (id) => {   
        console.log("click");
        let squares = [...this.props.appState.squares];     

        if (this.currentSquare !== null) {
            this.getDivPosition();

        }

            
        const activePlayer = this.props.appState.activePlayer;
 
        
        if(squares[id].value === "")
        {
            squares = this.resetClickedSquares(squares);               
            squares[id].value = activePlayer.symbol;
            squares[id].clicked = true;    
            this.setState({squares:squares, activePlayer: activePlayer}); 
            this.props.nextPlayer(activePlayer);
        }       
    }


    render() {
        const squares = this.props.appState.squares;
        return ( 
            squares.map(square => {
                return (<Square key={square.id}   
                        reffs={(test) => this.currentSquare = test}                     
                        click={this.clickSquareHandler.bind(this, square.id)} 
                        value={square.value}/>)
                })
        )
    }
}

export default SquareField;