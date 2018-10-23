import React from 'react';
import ReactDOM from 'react-dom';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleClick(e) {
        //TODO do somthing
    }

    render() {
        //TODO change button styles to default
        var MainContinerStyle = {}

            return (<button onClick={(e)=>{ this.handleClick.bind(this,e) }} style={MainContainerStyle} ></button>)
    }


}


