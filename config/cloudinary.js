require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dn9mvkjgt',   
  api_key: '815167178968631', 
  api_secret: 'us4rR_SyGzwA46ea4MgiGwH3rbU'
});

module.exports = cloudinary;
