const config = require('config');
const mongoose = require('mongoose');

const db = process.env.MONGO_URI;
if (!db) {
    throw new Error('MONGO_URI is not defined in .env');
  }

mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

module.exports = mongoose.connection;
