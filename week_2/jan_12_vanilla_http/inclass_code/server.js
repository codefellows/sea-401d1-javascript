const http = require('http');
const fs = require('fs');

var server = module.exports = exports = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/hello') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({msg: 'hello world'}));
    return res.end();
  }

  if (req.method === 'GET' && (req.url === '/' || req.url === '/index.html')) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var index = fs.createReadStream(__dirname + '/public/index.html');
    return index.pipe(res); 
  }

  res.writeHead(404, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({msg: 'page not found'}));
  return res.end();
});

server.listen(3000, () => console.log('server up'));
