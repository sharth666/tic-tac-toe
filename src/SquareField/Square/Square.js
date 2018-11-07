import React from "react";
import classes from "../../App.module.css";

const Square = (props) => {
    return <div onClick={props.click}>
             <div className={classes.playertoken}>{props.value}</div>
          </div>
}

export default Square;