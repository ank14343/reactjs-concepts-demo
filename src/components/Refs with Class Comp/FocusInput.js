import React, { Component } from 'react';
import Input from './Input';

class FocusInput extends Component {
    constructor(props) {
        super(props);
        this.compnentRef = React.createRef()
    }
    
    clickHandler = () => {
        // console.log(this.compnentRef)
        this.compnentRef.current.focusInput()
        // here this.compnentRef.current points to the Input.js Component
        // if we want to point to input element directly then we need forwardRef method
    }

    render() {
        return (
            <div>
                <Input ref={this.compnentRef} />
                <button onClick={this.clickHandler}>focus input</button>
            </div>
        );
    }
}

export default FocusInput;