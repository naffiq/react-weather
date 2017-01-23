import React from 'react';

import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

var Weather = React.createClass({

  getInitialState() {
    return {
      city: '',
      temperature: 0,
      messageVisible: false
    }
  },

  handleSearch(city) {
    var that = this;

    openWeatherMap.getTemp(city).then(function (temp) {
      that.setState({
        city: city,
        temperature: temp,
        messageVisible: true
      });
    }, function (errorMessage) {
      alert(errorMessage);
    });
  },

  render() {
    var {city, temperature, messageVisible} = this.state;

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch} />
        <WeatherMessage city={city} temperature={temperature} isVisible={messageVisible}/>
      </div>
    );
  }
});

module.exports = Weather;
