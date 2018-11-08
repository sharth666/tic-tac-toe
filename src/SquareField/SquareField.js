import React,  {Component} from 'react';
import Square from './Square/Square'

class SquareField extends React.Component {    
    constructor(props) {   
        super(props);
        this.state = props.appState;
    }

    componentWillUpdate(nextState, nextProps) {        
        console.log(nextProps);
      }

    resetClickedSquares = (squares) => {
        const updatedSquares = squares.map(square => {
            square.clicked = false;
            return square;
        })
        return updatedSquares;
        }


    clickSquareHandler = (id) => {   
        console.log("click");
        let squares = [...this.props.appState.squares];     
            
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
        console.log("Render squarefield");
        console.log(this.props.appState.squares);
        const squares = this.props.appState.squares;
        return ( 
            squares.map(square => {
                return (<Square key={square.id}                       
                        click={this.clickSquareHandler.bind(this, square.id)} 
                        value={square.value}/>)
                })
        )
    }
}

export default SquareField;