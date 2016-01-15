const Router = require(__dirname + '/../index');
const http = require('http');

var router = new Router();
router.get('/hello', function(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({msg: 'hello world'}));
  res.end();
});

router.get('/anotherroute', function(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({msg: 'another router'}));
  res.end();
});

var server = http.createServer(router.route());
server.listen(3000, () => console.log('server up'));
