import React from 'react';

import './LayoutBody.css';

const LayoutBody = (props) => (
    <div className="l-body">
        {props.children}
    </div>
);

export default LayoutBody;