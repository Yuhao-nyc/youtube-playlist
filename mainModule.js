//module.exports = {
//  currentUrl: 'www.dailyfx.com'
//}

function construct_func() {
  var nameHolder;
  return {
    name: function(firstName, lastName) {
        nameHolder = firstName + lastName;
    },

    consoleLog: function() {
        console.log(nameHolder);
    }

  }

}

module.exports = construct_func;
