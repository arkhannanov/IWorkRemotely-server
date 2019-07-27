const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const jobsRoute = require('./routes/jobs');

app.use('/jobs', jobsRoute);
app.use('/logo', express.static('logo'));

app.get('/', (req, res) => {
  res.send('Работает');
});

mongoose.connect('mongodb+srv://arkhannanov:Victory20@iworkremotely-5l8jr.mongodb.net/IWorkRemotely?retryWrites=true&w=majority', {useNewUrlParser: true}).catch(error => handleError(error));

mongoose.connection.on('error', err => {
  logError(err);
});

app.listen(3000);