var events = require('events'); //create events

var eventEmitter = new events.EventEmitter(); //assign and fire event accordingly

eventEmitter.on('myCustomEvent', function(arg1, arg2) {
  console.log('event fired');

  /* var arg1 = 'yesssss';
  var arg2 = 'its meeee';
  */
  console.log(arg1 + '' + arg2);
})
//similiar to document.querySelector('tag').onClick = function() {...}

//multiple functions be attached to same event
eventEmitter.on('myCustomEvent', function(arg1, arg2, arg3) {
  /* var arg1 = 'hello';
  var arg2 = 'its';
  var arg3 = 'me' */

  console.log(arg1 + '' + arg2 + '' + arg3);
})

setInterval(function() {
  eventEmitter.emit('myCustomEvent', 'more ', 'more ', 'annnnd its stringlast')
}, 2000)
