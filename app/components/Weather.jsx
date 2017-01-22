import React from 'react';

import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';

var Weather = React.createClass({

  getInitialState() {
    return {
      message: '',
    }
  },

  updateMessage(message) {
    this.setState({
      message: message
    });
  },

  render() {
    var message = this.state.message;

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm updateMessage={this.updateMessage} />
        <WeatherMessage message={message}/>
      </div>
    );
  }
});

module.exports = Weather;
