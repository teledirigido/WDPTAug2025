const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const app = express();
const PORT = 3000;

app.use(logger('dev')); // Morgan configuration
app.use(express.json());

// initial route on root folder > http://localhost:3000/
app.get('/', (req, res) => {
  res.json({ 'data': true })
});

app.use('/', [
  require('./routes/posts'),
  require('./routes/author')
]);

// Start the server
app.listen(PORT, () => {
  console.log(`Your server is UP ⬆️. Listening on http://localhost:${PORT}`);
});

// Initialize mongoosee
mongoose
  .connect('mongodb://localhost:27017/express-mongoose-27-may')
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error("Error connecting to mongo", err));