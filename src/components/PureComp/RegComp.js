import React, { Component } from 'react';

class RegComp extends Component {
    render() {
        // always return if parent comp updates bcoz shouldComponentUpdate methods return true always by deafult
        console.log("...RegComp render...");
        return (
            <div>
                RegComp {this.props.name}
            </div>
        );
    }
}

export default RegComp;