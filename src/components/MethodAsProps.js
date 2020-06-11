import React, { Component } from 'react';

function MethodAsPropsTmp(props) {
    // return <button onClick={props.handler}>greet parent</button>
    // can pass parameters as well
    return <button onClick={() => props.handler("child")}>greet parent</button>
}

class MethodAsProps extends Component {
    constructor() {
        super()
        this.state = {
            parent: "Parent"
        }
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent(p) {
        alert(`hello ${this.state.parent} from ${p}`);
    }
    render() {
        // passing function as props to other components
        return <><MethodAsPropsTmp handler={this.greetParent} /></>;
    }
}

export default MethodAsProps;