var obj = {num: 5};

var addOne = function(input) {
  return input.num++;
};

console.log('result: ' + addOne(obj));
console.log('obj.num: ' + obj.num);
