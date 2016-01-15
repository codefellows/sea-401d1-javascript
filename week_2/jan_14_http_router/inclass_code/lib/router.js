var Router = module.exports = exports = function() {
  this.routes = {
    'GET': {},
    'POST': {},
    'PUT': {},
    'PATCH': {},
    'DELETE': {},
    'FourOhFour': function(req, res) {
      res.writeHead(404, {'Content-Type': 'application/json'});
      res.write(JSON.stringify({msg: 'page not found'}));
      return res.end(); 
    }
  };
};

Router.prototype.get = function(url, callback) {
  this.routes['GET'][url] = callback;
};

Router.prototype.put= function(url, callback) {
  this.routes['PUT'][url] = callback;
};

Router.prototype.post= function(url, callback) {
  this.routes['POST'][url] = callback;
};

Router.prototype.patch= function(url, callback) {
  this.routes['PATCH'][url] = callback;
};

Router.prototype.delete= function(url, callback) {
  this.routes['DELETE'][url] = callback;
};

Router.prototype.route = function(options) {
  return (req, res) => {
    var routeFunction = this.routes[req.method][req.url] || this.routes.FourOhFour;
    routeFunction(req, res);
  };
};
