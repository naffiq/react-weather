var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery',
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main',
      Nav: 'app/components/Nav',
      NavLinkMenu: 'app/components/nav/NavLinkMenu',
      NavSearchForm: 'app/components/nav/NavSearchForm',
      Weather: 'app/components/Weather',
      WeatherForm: 'app/components/weather/WeatherForm',
      WeatherMessage: 'app/components/weather/WeatherMessage',
      About: 'app/components/About',
      Examples: 'app/components/Examples',
      ErrorModal: 'app/components/ErrorModal',
      openWeatherMap: 'app/api/openWeatherMap',
      applicationStyles: 'app/styles/app.css'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
