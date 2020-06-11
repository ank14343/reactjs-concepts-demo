import React, { Component } from 'react';
import FRInput from './FRInput';

class FRInputParent extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef()
    }
    clickHandler = () => {
        // here this.inputRef.current directly focusing to input element
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>
                <FRInput ref={this.inputRef} />
                <button onClick={this.clickHandler}>focus Input</button>
            </div>
        );
    }
}

export default FRInputParent;