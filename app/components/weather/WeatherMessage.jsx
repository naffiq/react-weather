import React from 'react';

var WeatherMessage = React.createClass({
  render() {
    var {city, temperature} = this.props;

    return (
      <div>It's {temperature} degrees in {city}</div>
    );
  }
});

module.exports = WeatherMessage;
