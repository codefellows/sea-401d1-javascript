const fs = require('fs');

module.exports = exports = function(path, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var index = fs.createReadStream(path || (__dirname + '/../public/index.html'));
  index.pipe(res);
};
