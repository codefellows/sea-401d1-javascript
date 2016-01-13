var net = require('net');
var fs = require('fs');
var fileCount = 0;

var server = module.exports = exports = net.createServer((socket) => {
  var filename = fileCount++ + '.log';
  var file = fs.createWriteStream(__dirname + '/log/' + filename);
  socket.pipe(file);
  socket.write(filename);
  socket.end();
  socket.on('close', () => {
    file.close();
  });
});

server.listen(3000, () => console.log('server up'));
