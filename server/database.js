const mongoose = require('mongoose');
const { db_hostname, db_port } = require('./config');

mongoose.connect(`mongodb://${db_hostname}:${db_port}/truenorth`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection
  .once('open', () => {
    console.log('DB connected');
  })
  .on('error', console.error.bind(console, 'MongoDB connection error:'));
