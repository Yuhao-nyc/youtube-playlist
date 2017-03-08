var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function(req, resp) {
  resp.sendFile('express.html', {root: path.join(__dirname, './assets')})
})

app.get(/^(.+)$/, function(req, resp) {
  console.log(req.params);
  try {
    if(fs.statSync(path.join(__dirname, './assets/', req.params[0]+'.html')).isFile()) {
      resp.sendFile(req.params[0]+'.html', {root: path.join(__dirname, './assets')})
    } //check if the file exist html files
  } catch(err) {
    console.log(err);
    resp.sendFile('404.html', {root: path.join(__dirname, './assets')})
  }

  /* if(fs.statSync(path.join(__dirname, './assets/', req.params[0], '.html')).isFile()) {
    resp.sendFile(req.params[0]+'.html', {root: path.join(__dirname, './assets')})
  } else {
    resp.sendFile('404.html', {root: path.join(__dirname, './assets')})
  } */
})

app.listen(8080, function() {
  console.log('app is running on 8080')
})
