module.exports = exports = function(req, res, next) {
  var jsonString = '';

  req.on('data', (data) => {
    jsonString += data.toString();
  });

  req.on('end', () => {
    if (!jsonString) return next();

    try {
      req.body = JSON.parse(jsonString);
    } catch(e) {
      console.log(e);
      return res.status(400).json({msg: 'invalid json'});
    }

    next();
  });
};
