import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';

require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Weather}/>

      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
