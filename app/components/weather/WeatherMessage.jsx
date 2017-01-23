import React from 'react';

var WeatherMessage = ({city, temperature}) => {
  return (
    <h3 className="text-center">It's {temperature} degrees in {city}</h3>
  );
}

module.exports = WeatherMessage;
