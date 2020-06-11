import React, { Component } from 'react';

// Render Props:: sharing code b\w react components using a prop whose value is a function
class RenderPropDemo extends Component {
    render() {
        return (
            <div>
                {this.props.render(true)}
            </div>
        );
    }
}

export default RenderPropDemo;