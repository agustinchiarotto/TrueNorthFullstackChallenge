const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  environment: process.env.NODE_ENV || 'development',
  api_hostname: process.env.API_HOSTNAME || '127.0.0.1',
  api_port: process.env.API_PORT || '4000',
  db_hostname: process.env.DB_HOSTNAME || '127.0.0.1',
  db_port: process.env.DB_PORT || '27017',
  HIPSUM_API_URL: process.env.HIPSUM_API_URL || 'https://hipsum.co/api/',
};
