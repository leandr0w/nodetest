require('dotenv').config;

const app = require('./app');

const port = process.env.PORT || 3500;
app.listen(port, () => {
  console.log('server running on ' + port);
});
