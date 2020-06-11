import React, { Component } from 'react';

class FormHandling extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            lib: "react"
        }
    }
    handleUsernameChange = (e) => {
        // console.log(e.target.value);
        this.setState({
            username: e.target.value
        })
    }
    handleLibChange = (e) => {
        this.setState({
            lib: e.target.value
        })
    }
    handleSubmitRequest = e => {
        alert(`${this.state.username} ${this.state.lib}`)
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmitRequest}>
                <div>
                    <label>Username </label>
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                </div>
                <div>
                    <label>lib / framwork </label>
                    <select value={this.state.lib} onChange={this.handleLibChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default FormHandling;