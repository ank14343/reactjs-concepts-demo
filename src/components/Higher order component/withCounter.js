import React from 'react';

// Higher Order Component HOC
// a function which accepts an original component and returns new component
// alternative of this, Render Props
const withCounter = (WrappedComponent, incrementNumber) => {
    class WithCounter extends React.Component {
        // we'll use these common code in other components
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            }
        }
        incrementCount = () => {
            this.setState((prevState) => ({
                count: prevState.count + incrementNumber
            }))
        }
        render() {
            return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props}/>
        }
    }
    return WithCounter;
}

export default withCounter;

// UpdatedComponent == withCounter
// OriginalComponent == WrappedComponent
// NewComponent == WithCounter