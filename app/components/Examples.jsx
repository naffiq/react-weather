import React from 'react';
import {Link} from 'react-router';

var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ul>
        <li><Link to="/?location=Almaty">Almaty</Link></li>
        <li><Link to="/?location=Pavlodar">Pavlodar</Link></li>
        <li><Link to="/?location=Saint%20Petersburgh">Saint Petersburgh</Link></li>
      </ul>
    </div>
  );
};

module.exports = Examples;
