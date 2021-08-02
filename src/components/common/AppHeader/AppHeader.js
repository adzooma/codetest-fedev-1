import React from 'react';
import './AppHeader.css';

const AppHeader = () => (
  <div className="appheader">
    {/* <span className="appheader__warning">App is not responsive. Desktop only.</span> */}
    <h1 className="appheader__title">Adzooma Code Test - Football Dream Team</h1>
    <a className="appheader__github" href="https://bitbucket.org/adzooma/adzooma-code-tests/src/master/" target="_blank" rel="noopener noreferrer">
      <img src="/github.png" width="32" height="32" alt="GitHub" />
      <span>Click for test repository</span>
    </a>
  </div>
);

export default AppHeader;