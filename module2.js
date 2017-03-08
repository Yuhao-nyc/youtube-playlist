var mod = require('./mainModule');

var name = new mod(); //sharing same module from mainmodule

name.name('Adam', 'Gkolu');

name.consoleLog();

//var moduleX = require('./mainModule');

//console.log('the current url is' + currentUrl)
