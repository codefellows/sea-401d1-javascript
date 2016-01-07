var fs = require('fs');

process.nextTick(function() {
  fs.readFile('one.txt', function(err, data) {
    console.log('hello from first callback');
    console.log(data.toString());
    fs.readFile('three.txt', function(err, data) {
      console.log('hello from third callback');
      console.log(data.toString());
    });
  });
});

fs.readFile('two.txt', function(err, data) {
  console.log('hello from second callback');
  console.log(data.toString());
  fs.readFile('four.txt', function(err, data) {
    console.log('hello from fourth callback');
    console.log(data.toString());
  });
});

console.log('first');

process.on('exit', function() {
  console.log('last');
});
