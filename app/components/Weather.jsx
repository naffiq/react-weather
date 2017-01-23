import React from 'react';

import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';

var Weather = React.createClass({

  getInitialState() {
    return {
      city: '',
      temperature: 0,
      messageVisible: false
    }
  },

  handleSearch(city) {
    this.setState({
      city: city,
      temperature: 10,
      messageVisible: true
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
