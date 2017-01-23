import React from 'react';

var NavSearchForm = React.createClass({
  onFormSubmit (e) {
    e.preventDefault;

    var city = this.refs.city.value;
    if (city.length > 0) {
      this.refs.city.value = '';
      // TODO: search for city
    }
  },
  render () {
    return (
      <div className="top-bar-right">
        <form onSubmit={this.onFormSubmit}>
          <ul className="menu">
            <li><input type="search" placeholder="Enter city name" ref="city"/></li>
            <li><button type="button" className="button">Get Weather</button></li>
          </ul>
        </form>
      </div>
    );
  }
});

module.exports = NavSearchForm;
