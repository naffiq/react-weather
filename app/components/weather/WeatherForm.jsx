import React from 'react';

var WeatherForm = React.createClass({
  onFormSubmit(e) {
    e.preventDefault();

    var city = this.refs.city.value;
    if (city.length > 0) {
      this.props.onSearch(city);
      this.refs.city.value = '';
    }
  },
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="small-8 columns">
          <label>Enter city name
            <input type="password" id="password" placeholder="e.g. Almaty" aria-describedby="cityName" required ref="city" />
            <span className="form-error">
              I'm required!
            </span>
          </label>
          <p class="help-text" id="cityName">Enter a city name, please.</p>
          <button className="button">Get Weather</button>
        </div>
      </form>
    );
  },
});

module.exports = WeatherForm;
