// how to read file on serverside
var fs = require('fs');

console.log('before excuted');

/* fs.readFile('./file', 'utf8', function(error, data) { //async function will excute after rest functions
  console.log(data);
});*/

var dataSync = fs.readFileSync('./file', 'utf8'); //make it sync!!

console.log(dataSync);

console.log('already excuted!')
