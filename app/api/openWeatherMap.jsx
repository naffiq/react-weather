import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=8205f9ce0d9aeec4c40c1b211e06a006';
// q=Almaty

module.exports = {
  getTemp(city) {
    var encodedCity = encodeURIComponent(city);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedCity}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error('Unable to fetch weather for that location.');
    });
  }
};
