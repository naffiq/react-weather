import React from 'react';

import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal';

var Weather = React.createClass({

  getInitialState () {
    return {
      isLoading: false,
    }
  },

  componentDidMount () {
    var location = this.props.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  componentWillReceiveProps (newProps) {
    var location = newProps.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
      debugger;
    }
  },

  handleSearch (city) {
    var that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      city: undefined,
      temperature: undefined
    });

    openWeatherMap.getTemp(city).then(function (temp) {
      that.setState({
        city: city,
        temperature: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({
        city: undefined,
        temperature: undefined,
        isLoading: undefined,
        errorMessage: errorMessage.message
      });
    });
  },

  render () {
    var {isLoading, city, temperature, messageVisible, errorMessage} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temperature && city) {
        return <WeatherMessage temperature={temperature} city={city}/>;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }

      return (
        <div></div>
      )
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />

        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
