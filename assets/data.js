var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

// use middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/'));

//app.use('/assets', express.static(__dirname + '/assets'));

app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'css')));


var todoLists = [
  {id: 1, desc: 'apple'},
  {id: 2, desc: 'orange'},
  {id: 3, desc: 'bloodborne'}
];

app.get('/', function(req, resp) {
  resp.render('express.ejs', {
    title: 'lists App',
    items: todoLists
  });
  //resp.sendFile('express.ejs', {root: path.join(__dirname, './')})
})

//  //resp.sendFile('express.html', {root: path.join(__dirname, './assets')})
//})

app.post('/add', function(req, resp) {
  var newItem = req.body.newItem; //body is middleware parser
  todoLists.push({
    id: todoLists.length+1,
    desc: newItem
  })

  //show the results after the function
  resp.redirect('/');
})

/* app.get('/', function(req, resp) {
  var response = "Hey!" + req.query.firstName;
  //console.log(response);
  resp.end(response); //what to send back
})*/

app.listen(8080, function() {
  console.log('app is running on 8080')
})
