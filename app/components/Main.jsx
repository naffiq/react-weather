import React from 'react';

import Nav from 'Nav';

var Main = React.createClass({
  render() {
    return (
      <div>
        <Nav/>
        <h2>MainComponent</h2>

        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
