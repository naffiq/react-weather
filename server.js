var express = require('express');

var app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('App is up and running on port 3000');
});
