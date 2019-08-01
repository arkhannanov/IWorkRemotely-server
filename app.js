const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


app.set('port', (process.env.PORT || 5000));

app.use(cors());
app.use(bodyParser.json());

const jobsRoute = require('./routes/jobs');

app.use('/jobs', jobsRoute);
app.use('/logo', express.static('logo'));

app.get('/', function(request, response) {
  var result = 'App is running'
  response.send(result);
}).listen(app.get('port'), function() {
  console.log('App is running, server is listening on port ', app.get('port'));
});

mongoose.connect('mongodb+srv://arkhannanov:Victory20@iworkremotely-5l8jr.mongodb.net/IWorkRemotely?retryWrites=true&w=majority',
  {useNewUrlParser: true}).catch(error => console.log(error));

app.listen(3000);