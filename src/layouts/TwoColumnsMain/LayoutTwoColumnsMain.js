import React from 'react';
import './LayoutTwoColumnsMain.css';

const LayoutTwoColumnsMain = (props) => (
  <div className="l-twocolumnsmain two-third">
      {props.children}
  </div>
);

export default LayoutTwoColumnsMain;
