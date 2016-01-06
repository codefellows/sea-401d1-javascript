var obj = {num: 5};

var addOne = function(input) {
  var another = input.num++;
  return another++;
};

console.log('result: ' + addOne(obj));
console.log('obj.num: ' + obj.num);
