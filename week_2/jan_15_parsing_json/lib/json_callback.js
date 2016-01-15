module.exports = exports = function(req, cb) {
  var jsonString = '';
  req.on('data', function(data) {
    jsonString += data.toString();
  });

  req.on('end', function() {
    try {
      cb(null, JSON.parse(jsonString));
    } catch(e) {
      cb(new Error('invalid json in request'));
    }
  });
};
