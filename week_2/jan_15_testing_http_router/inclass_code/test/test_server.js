const Router = require(__dirname + '/../index');
const http = require('http');

var router = new Router();
router.get('/test', function(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({msg: 'test from get'}));
  res.end();
});

router.put('/test', function(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({msg: 'test from put'}));
  res.end();
});

router.patch('/test', function(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({msg: 'test from patch'}));
  res.end();
});

router.post('/test', function(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({msg: 'test from post'}));
  res.end();
});

router.delete('/test', function(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({msg: 'test from delete'}));
  res.end();
});


var server = module.exports = exports = http.createServer(router.route());
server.listen(3000, () => console.log('server up'));
