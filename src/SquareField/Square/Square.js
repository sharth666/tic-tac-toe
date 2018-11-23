import React, {Component} from "react";
import classes from "../../App.module.css";

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
    return <div onClick={this.props.click} ref={this.props.reffs}>
             <div className={classes.playertoken}>{this.props.value}</div>
          </div>
    }
}

export default Square;