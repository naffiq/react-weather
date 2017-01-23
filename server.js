var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  if (typeof req.headers['x-forwarded-proto'] === 'undefined' || req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect(`http://${req.hostname}${req.url}`);
  }
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
});
