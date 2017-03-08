var express = require('express');
var app = express();
var router = express.Router();

app.use('/myRouter', router); //pass to middleware router (middle path)

router.get('/heyFirstRouter', function(req, resp) { // fall under myrouter under the path
  resp.end('the very first router');
})

router.get('/heyFirstRouterAgain', function(req, resp) {
  resp.end('the very second router');
})

app.get('/', function(req, resp) {
  resp.end('hey, router');
})

app.listen(8080, function() {
  console.log('server running...')
})
