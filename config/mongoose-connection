const config = require('config');
const mongoose = require('mongoose');

const db = config.get('mongoURI');

mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

module.exports = mongoose.connection;
