var fs = require('fs');
fs.readFile('./doesnotexist', function(err, data) {
  console.log(err);
  console.log(data);
});

fs.readFile('./somefile.txt', function(err, data) {
  console.log(err);
  console.log(data);
});
