module.exports = exports = function(req) {
  return new Promise((resolve, reject) => {
    var jsonString = '';
    req.on('data', function(data) {
      jsonString += data.toString();
    });

    req.on('end', function() {
      try {
        resolve(JSON.parse(jsonString));
      } catch(e) {
        reject(e);
      }
    });
  });
};
