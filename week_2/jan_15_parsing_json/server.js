const http = require('http');
const jsonParser = require(__dirname + '/lib/json_callback');
const jsonPromise = require(__dirname + '/lib/json_promise');

var sendRes = function(res) {
  return function(input) {
    res.writeHead(input.statusCode, {'Content-Type': 'application/json'});
    res.write('{"msg": "' + input.msg + '"}'); // '{"msg":"could not parse json"}'
    res.end();
  };
};

http.createServer((req, res) => {
  if (req.url === '/promise') {
    return jsonPromise(req)
      .then(function(data) {
        if (data.hello) console.log('wow such hello, so world');
        return {
          statusCode: 200,
          msg: JSON.stringify(data)
        };
      })
      .catch(function(err) {
        return {
          statusCode: 500,
          msg: 'invalid json'
        };
      })
      .then(sendRes(res), sendRes(res));
  }

  jsonParser(req, (err, data) => {
    var statusCode = (err) ? 500: 200;
    var msg = JSON.stringify((err) ? {msg: 'invalid json'}:data);
    res.writeHead(statusCode, {'Content-Type': 'application/json'});
    res.write(msg);
    res.end();
    debugger;
  });
}).listen(3000, () => console.log('server up'));
