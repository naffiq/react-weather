import React from 'react';

import NavLinkMenu from 'NavLinkMenu';
import NavSearchForm from 'NavSearchForm';

var Nav = () => {
  return (
    <div className="top-bar">
      <NavLinkMenu />
      <NavSearchForm />
    </div>
  )
};

module.exports = Nav;
