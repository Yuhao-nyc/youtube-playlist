var http = require('http'); //load either local or global module here now is a global
var server = http.createServer(engine);

server.listen(3030, function() {
  //fire the function when server been request
  console.log('server was hit by request')


});


function engine(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain','Author': 'Yuhao'});

  response.end('Hey There! the request is sent from' + request.url) //show url based on clients requests

  //console.log(response);
}
