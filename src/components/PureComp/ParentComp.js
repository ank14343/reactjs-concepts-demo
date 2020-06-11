import React, { Component, PureComponent } from 'react';
import RegComp from './RegComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';
// PureComponent only works with class comp. for using it in function we need memo

class ParentComp extends Component {
// class ParentComp extends PureComponent {
    
    constructor(props) {
        super(props);
        this.state = {
            name: "Arya"
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Arya"
            })
        }, 2000)
    }
    
    render() {
        console.log(".............ParentComp render...............");
        return (
            <div>
                ParentComp
                <MemoComp name={this.state.name} />
                {/* <RegComp name={this.state.name} />
                <PureComp name={this.state.name} /> */}
            </div>
        );
    }
}

export default ParentComp;