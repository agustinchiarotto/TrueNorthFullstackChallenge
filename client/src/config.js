const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  ENVIROMENT: process.env.ENV || 'dev',
  API_URL: process.env.API_URL || 'http://localhost:4000',
};
