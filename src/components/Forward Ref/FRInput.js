import React from 'react';

FRInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input ref={ref} />
        </div>
    );
})

export default FRInput;