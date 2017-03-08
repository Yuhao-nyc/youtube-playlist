var mod = require('./mainModule');

var name = new mod();  //sharing same module from mainmodule

name.name('Yuhao', 'Feng');

name.consoleLog();

//var moduleX = require('./mainModule');
//moduleX.currentUrl = 'www.google.com';

//console.log('the current url is' + currentUrl)
