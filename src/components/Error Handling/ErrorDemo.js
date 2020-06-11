import React from 'react';

function ErrorDemo({name}) {
    if(name !== "Arya") {
        throw new Error("this is error");
    }
    return (
        <div>
            {name}
        </div>
    );
}

export default ErrorDemo;