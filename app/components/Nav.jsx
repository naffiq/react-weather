import React from 'react';
import {Link, IndexLink} from 'react-router';

var Nav = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="dropdown menu" data-dropdown-menu>
          <li className="menu-text">React Weather App</li>
          <li><IndexLink to="/" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
          <li><Link to="/about" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
          <li><Link to="/examples" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
        </ul>
      </div>

    </div>
  )
};

module.exports = Nav;
