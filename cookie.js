var express = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

app.get('/', function(req, resp) {
  resp.cookie('myFirstCookie', 'looks good') // name, attr, options make diffs
  resp.end('sets cookie.....');
})

app.get('/clearCookie', function(req, resp) {
  resp.clearCookie('myFirstCookie') // name, attr, options make diffs
  resp.end('cookie cleans');
})

app.listen(8080, function() {
  console.log('server running')
})
