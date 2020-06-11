import React, { Component } from 'react';

class BindEventHandlers extends Component {
    
    constructor() {
        super()
        this.state = {
            msg: "helllo"
        }
        // // this approach is good || the best
        // this.changeMsg = this.changeMsg.bind(this)
    }

    // changeMsg() {
    //     this.setState({
    //         msg: "wassup"
    //     })
    // }

    // use fn as class property || v gud
    changeMsg = () => {
        this.setState({
            msg: "fghhghj"
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.msg}</h2>
                {/* not a good way to bind || not good (performance isse) */}
                {/* <button onClick={this.changeMsg.bind(this)}>Clcik</button> */}
                {/* not a good way to bind with arrow fn too || not good but can pass parameter here */}
                {/* <button onClick={() => this.changeMsg()}>Clcik</button> */}
                <button onClick={this.changeMsg}>click</button>
            </div>
        );
    }
}

export default BindEventHandlers;