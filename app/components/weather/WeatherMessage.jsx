import React from 'react';

var WeatherMessage = React.createClass({
  render() {
    var {city, temperature, isVisible} = this.props;

    if (isVisible) {
      return (
        <div>It's {temperature} degrees in {city}</div>
      );
    }

    return (
      <div></div>
    );
  }
});

module.exports = WeatherMessage;
