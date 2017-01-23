import React from 'react';

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>
        This project uses openWeatherMap.org API to fetch weather data
        and provides a form to search a weather in your city with ReactJS.
      </p>
      <p className="label">Made by naffiq for Udemy course</p>
    </div>
  );
};

module.exports = About;
