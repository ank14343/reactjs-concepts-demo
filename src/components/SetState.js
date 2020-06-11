import React, { Component } from 'react';

export var setStateRef;

class SetState extends Component {
    
    constructor() {
        super();
        setStateRef = this;
        this.state = {
            count: 0
        }
    }

    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log("after state changes (callback) ", this.state.count);    
        // });

        // for increment5 function
        this.setState( (prevState, props) => ({
            count: prevState.count + props.value
        }), () => {
            console.log("after state changes (callback) ", this.state.count);
        } );
        console.log("before state changes", this.state.count);
    }

    increment5() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <h2>Count - {this.state.count}</h2>
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        );
    }
}

export default SetState;