import React from 'react';
import './LayoutSiteHeader.css';

const LayoutSiteHeader = (props) => (
    <header className="l-siteheader">
        {props.children}
    </header>
);

export default LayoutSiteHeader;