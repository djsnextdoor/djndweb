import React from 'react';
import ReactDOM from 'react-dom';

import Button from './Button.js';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        var MainContinerStyle = {"width":"100%",
"height":"60px","display":"inline-flex", "justifyContent":"flex-start"}
        var itemStyle = {"width":"150px"}

        return (<div style={MainContinerStyle} >
                    <div style={itemStyle}><span>{"Dj's"}</span></div>
                    <div style={itemStyle}><span>{"About"}</span></div>
                    <div style={itemStyle}><span>{"Contact"}</span></div>
                    <div style={itemStyle}><span>{"Events"}</span></div>
                    <div style={itemStyle}><span>{"Mixes"}</span></div>
                    <div style={itemStyle}><span>{"Donate"}</span></div>
                </div>)
    }


}


