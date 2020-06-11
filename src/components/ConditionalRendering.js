import React, { Component } from 'react';

class ConditionalRendering extends Component {
    constructor() {
        super()
        this.state = {
            isOnline: true
        }
    }
    render() {
        var msg;
        if( this.state.isOnline )
            msg = <div>user is online</div>
        else
            msg = <div>user is offline</div>
        return (
            <div>
                {msg}
                {/* ternary operator */}
                {this.state.isOnline ? <div>user is online</div> : <div>user is offline</div>}
                {/* short circuit operator */}
                {this.state.isOnline && <div>user is online</div>}
            </div>
        );
    }
}

export default ConditionalRendering;