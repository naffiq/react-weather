import React from 'react';

var WeatherMessage = ({city, temperature}) => {
  return (
    <div>It's {temperature} degrees in {city}</div>
  );
}

module.exports = WeatherMessage;
