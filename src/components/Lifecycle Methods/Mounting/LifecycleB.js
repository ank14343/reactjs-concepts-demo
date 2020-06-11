import React, { Component } from 'react';

class LifecycleB extends Component {
    
    constructor() {
        super()
        this.state = {
            name: 'Arya'
        }
        console.log("LifecycleB constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleB getDerivedStateFromProps")
        return null;
    }

    componentDidMount() {
        console.log("LifecycleB componentDidMount")
    }

    render() {
        console.log("LifecycleB render")
        return (
            <div>
                LifecycleB
            </div>
        );
    }
}

export default LifecycleB;