// import React from 'react';

// function EventHandler(props) {
    
//     function clickHandler() {
//         console.log("button clicked....");
//     }

//     return (
//         <div>
//             <button onClick={clickHandler}>Click</button>
//         </div>
//     );
// }

// export default EventHandler;

import React, { Component } from 'react';

class EventHandler extends Component {
    
    clickHandler() {
        console.log("clicked.......");
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default EventHandler;