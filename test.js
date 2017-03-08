var test = module.exports = {};

this.output = 123;

test.caculateCircles = function(radius) {
  output = 2 * Math.PI * radius;
  return output;
}

test.updatingNow = function () {
  console.log('server updating right now....')
}

test.alreadyUpdated = function() {
  console.log('server updated!')
}

module.exports.data = test;
