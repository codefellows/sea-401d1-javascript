const http = require('http');

var server = http.createServer((req, res) => {
  console.log(req);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('here is an awesome response\n');
  res.end();
});

server.listen(3000);
