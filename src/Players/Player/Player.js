import React from 'react';
import classes from '../../App.module.css';

const player = (props) => {
    return (
        <div className={classes.player}>{props.activePlayer.name} ({props.activePlayer.symbol}) ist an der Reihe.</div>
    )
}

export default player;