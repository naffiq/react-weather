import React from 'react';

var NavSearchForm = React.createClass({
  onFormSubmit (e) {
    debugger;
    e.preventDefault;

    var city = this.refs.search.value;
    if (city.length > 0) {
      this.refs.search.value = '';
      var encodedLocation = encodeURIComponent(city);

      window.location.hash = `#/?location=${city}`;
    }
  },
  render () {
    return (
      <div className="top-bar-right">
        <form onSubmit={this.onFormSubmit}>
          <ul className="menu">
            <li><input type="search" placeholder="Enter city name" ref="search"/></li>
            <li><button type="submit" className="button">Get Weather</button></li>
          </ul>
        </form>
      </div>
    );
  }
});

module.exports = NavSearchForm;
