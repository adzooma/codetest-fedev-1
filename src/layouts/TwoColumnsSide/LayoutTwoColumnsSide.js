import React from 'react';
import './LayoutTwoColumnsSide.css';

const LayoutTwoColumnsSide = (props) => (
    <div className="l-twocolumnsside third">
        {props.children}
    </div>
);

export default LayoutTwoColumnsSide;
