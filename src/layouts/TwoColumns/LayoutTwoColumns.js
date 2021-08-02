import React from 'react';
import LayoutContainer from '../Container';
import './LayoutTwoColumns.css';

const LayoutTwoColumns = (props) => (
  <LayoutContainer>
    <div className="l-twocolumns flex three">
      {props.children}
    </div>
  </LayoutContainer>
);

export default LayoutTwoColumns;
