import React from 'react';

var WeatherForm = React.createClass({
  onFormSubmit(e) {
    e.preventDefault();

    var city = this.refs.city.value;
    if (city.length > 0) {
      this.props.onSearch(city);
      this.refs.city.value = '';
    }
  },
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <label>
          Enter city name
          <input type="search" placeholder="e.g. Almaty" required ref="city" />
        </label>
        <button className="button hollow expanded">Get Weather</button>
      </form>
    );
  },
});

module.exports = WeatherForm;
