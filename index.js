var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');

app.listen(3000, function () {
  console.log('my app is listening on port 3000!');
});

//using static files (css, js, png etc)
app.use('/app', express.static('./app'));

//routing
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//404
app.use(function(req, res, next) {
  res.status(404).sendFile(__dirname + '/404.html')
});

//error handle
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('<center><h1>:( Looks like something broke!</h1></center>');
});