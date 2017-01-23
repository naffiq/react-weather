import React from 'react';

import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

var Weather = React.createClass({

  getInitialState() {
    return {
      city: false,
      temperature: false,
      isLoading: false
    }
  },

  handleSearch(city) {
    var that = this;
    this.setState({isLoading: true});

    openWeatherMap.getTemp(city).then(function (temp) {
      that.setState({
        city: city,
        temperature: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      alert(errorMessage);
      that.setState({
        city: false,
        temperature: false,
        isLoading: false
      });
    });
  },

  render() {
    var {isLoading, city, temperature, messageVisible} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temperature !== false && city !== false) {
        return <WeatherMessage temperature={temperature} city={city}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
