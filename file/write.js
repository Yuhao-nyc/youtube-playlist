// how to read file on serverside
var fs = require('fs');

console.log('before excuted');

//var dataSync = fs.writeFile('./fileWrite', 'I\'m writing files', 'utf8', function(error) {
//  if (error) throw error;
//  console.log('file been written')
//});

var dataWriteSync = fs.writeFileSync('./fileSyncWrite', 'I\'m writing sync files', 'utf8'); //make it sync!!

console.log(dataWriteSync);

console.log('already excuted!')
