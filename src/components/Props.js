import React from 'react';

function Props(props) {
    console.log(props);
    // destructuring props
    const {name} = props;

    return (
        <h2>
            hi {name}
        </h2>
    );
}

export default Props;