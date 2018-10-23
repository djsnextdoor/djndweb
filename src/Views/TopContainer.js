import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../Components/Header.js';

export default class TopContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var MainContinerStyle = {"width":"100vw", "height":"100vh"}

        //TODO fill this out
        return (<div style={MainContinerStyle} >
                <Header props={{}}/>
                    <div><span>"test asdsadsadsadasdsad"</span></div>
                </div>)
    }


}







