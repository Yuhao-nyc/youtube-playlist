var express = require('express');
var app = express();
var router = express.Router();

app.use('/users', router); //pass to middleware router (middle path)

router.get('/:username(\\w+)', function(req, resp) {  // (regex) fall under myrouter under the path
  resp.end(JSON.stringify(req.params));
})

router.get('/:gender', function(req, resp) {  // (regex) fall under myrouter under the path
  resp.end(JSON.stringify(req.params));
})

app.listen(8080, function() {
  console.log('server running...')
})
