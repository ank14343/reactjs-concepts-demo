import React, { Component } from 'react';

export var stateRef;

export class State extends Component {

    constructor() {
        super();
        stateRef = this;
        this.state = {
            msg: "old",
            c: "ccc",
            d: "ddddd"
        }
    }

    changeMsg() {
        this.setState({
            msg: "new"
        });
    }

    render() {
        // destructuring props and states
        const {a, b} = this.props;
        const {c, d} = this.state;
        return (
            <div>
                <h2>{this.state.msg} {a} {b} {c} {d}</h2>
                <button onClick={() => this.changeMsg()}>change from inside</button>
            </div>
        );
    }
}

// export default State;
