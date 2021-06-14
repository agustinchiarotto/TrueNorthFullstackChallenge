const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const taskRoutes = require('./src/routes/task');
require('./database');
const { environment, api_hostname, api_port } = require('./config');

/**
 * Challenge FullStack Developer - TrueNorth
 * Agustin Chiarotto
 */

const app = express();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/task', taskRoutes);
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/api.html');
});
app.use(express.json());

app.listen(api_port || 4000, api_hostname, () => {
  console.log(`Server running in ${environment} mode at http://${api_hostname}:${api_port}/`);
  console.log('Listening on ', api_port || 4000);
});
