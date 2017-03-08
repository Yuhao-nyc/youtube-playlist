var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser()); //the middleware

app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function(req, resp) {
  resp.sendFile('express.html', {root: path.join(__dirname, './assets')})
})

app.post('/', function(req, resp) {
  //resp.sendFile('express.html', {root: path.join(__dirname, './assets')})
  //server <--> the middleware <--> browser/clients

  resp.end(JSON.stringify(req.body)); //sending req body

  if(req.body.firstName == 'admin') {
    console.log('Hey admin!')
  } else {
    console.log('get lost!')
  }
})

/* app.get('/', function(req, resp) {
  var response = "Hey!" + req.query.firstName;
  //console.log(response);
  resp.end(response); //what to send back
})*/

app.listen(8080, function() {
  console.log('app is running on 8080')
})
