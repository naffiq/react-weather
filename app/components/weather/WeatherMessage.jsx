import React from 'react';

var WeatherMessage = React.createClass({
  render() {
    var message = this.props.message;
    return (
      <div>{message}</div>
    );
  }
});

module.exports = WeatherMessage;
