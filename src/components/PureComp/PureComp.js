import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
    render() {
        // for Performance Boost
        // does not render if prevState is same as current state which is implement inside shouldComponentUpdate that means this function shallow compares prop and state.
        console.log("...PureComp render...");
        return (
            <div>
                PureComp {this.props.name}
            </div>
        );
    }
}

export default PureComp;