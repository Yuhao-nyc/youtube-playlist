var bookPrices = [10, 11, 13, 17, 3, 5, 1, 18, 20];

//sort the prices

var sortedPrices = bookPrices.sort(function(a, b){return a-b});

//remove every third index of the Array

for(var i = 2; i < sortedPrices.length - 1; i+=2)

{ sortedPrices.splice(i, 1); console.log(sortedPrices); }
