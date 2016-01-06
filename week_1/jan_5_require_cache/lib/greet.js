var outsideName = null;

var greet = module.exports = function(name) {
  var name = outsideName = outsideName || name; 
  return 'hello ' + name;
};

console.log(greet('from greet'));
