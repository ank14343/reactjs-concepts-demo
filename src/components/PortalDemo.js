import React from 'react';
import ReactDOM from 'react-dom';

function PortalDemo(props) {
    return ReactDOM.createPortal((
        <h1>
            PortalDemo
        </h1>
    ), document.getElementById("portal-root"));
}

export default PortalDemo;