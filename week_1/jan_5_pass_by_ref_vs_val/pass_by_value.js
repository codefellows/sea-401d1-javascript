var num = 5;

var addOne = function(input) {
  var result = input++
  console.log('input:' + input);
  return result;
};

var result = addOne(num);
var result2 = addOne(num);
console.log('result: ' + result);
console.log('result2: ' + result2);
console.log('num: ' + num);
