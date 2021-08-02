import React from 'react';
import './LayoutContainer.css';

const LayoutContainer = (props) => (
    <div className="l-container">
        {props.children}
    </div>
);

export default LayoutContainer;
