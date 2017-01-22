import React from 'react';

var WeatherForm = React.createClass({
  onFormSubmit(e) {
    e.preventDefault();

    var city = this.refs.city.value;
    if (city.length > 0) {
      this.props.updateMessage(city);
      this.refs.city.value = '';
    }
  },
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="form-group">
          <input className="form-control" ref="city" />
        </div>
        <button className="btn btn-default btn-block">Get Weather</button>
      </form>
    );
  },
});

module.exports = WeatherForm;
