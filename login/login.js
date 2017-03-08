var express = require('express');
var bodyParser = require('body-parser');
var sessions = require('express-session');

var session;


var app = express();

app.use(bodyParser.json()); //the middleware
app.use(bodyParser.urlencoded({entended: true})); //the middleware


app.use(sessions({
  secret: 'ksia9012931(@#*@(()*&@^^))',
  resave: false,
  saveUninitialized: true

}))


app.get('/login', function(req, resp) {

  resp.sendFile('./login.html', {root: __dirname})
})

app.post('/login', function(req, resp) {
  //resp.sendFile('express.html', {root: path.join(__dirname, './assets')})
  //server <--> the middleware <--> browser/clients
  //resp.end(JSON.stringify(req.body)); //sending req body

  session = req.session;
  //if (req.body.username == 'admin' && req.body.password == 'admin') {
    session.uniqueID = req.body.username;
  //}

  resp.redirect('/redirects');
})

app.get('/logout', function(req, resp) {
 req.session.desktory(function(err) {
   console.log(err);
   resp.rediret('/login');
 })

})

app.get('/admin', function(req, resp) {
  session = req.session;
  if (session.uniqueID != 'admin') {
    resp.send('STOP THERE!')
  }
  resp.send('Hey there admin!')
})

app.get('/redirects', function(req, resp) {
  session = req.session;
  if (session.uniqueID =='admin') {
    resp.redirect('/admin')
  } else {
    resp.send(req.session.unqiueID + 'not found! get lost! or <a href="/logout> Kill sessions </a>"')
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
