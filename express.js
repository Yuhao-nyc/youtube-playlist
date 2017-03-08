var express = require('express');
var app = express();

app.use('/cssFiles', express.static(__dirname + '/assets'));
//its avaibable on server localhost:port/cssFiles but on folder its on /assets


app.get('/hello', function(request, response) { //response to /specific hello url
  response.send('hello from Express.js')
})

app.listen(3030, function() {
  console.log('site in running on 3030')
})
