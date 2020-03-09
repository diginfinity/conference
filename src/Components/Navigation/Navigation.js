import React from 'react';

import './navigation.scss';

function Navigation() {
  return (
    <div className="navigation">
      <div className="nav-left">
        <div className="menu">
          <div className="menu-circle">
            <div className="lines">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div>
          <p>digital</p>
          <p>infinity.</p>
          <p className="conference-text">conference</p>
        </div>
      </div>
      <div className="nav-right">
        <button className="nav-button">Rezervišite!</button>
      </div>
    </div>
  );
}

export default Navigation;