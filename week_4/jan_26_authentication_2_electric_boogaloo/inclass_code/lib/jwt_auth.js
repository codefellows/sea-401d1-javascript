const User = require(__dirname + '/../models/user');
const jwt = require('jsonwebtoken');

module.exports = exports = function(req, res, next) {
  var decoded;
  try {
    decoded = jwt.verify(req.headers.token, process.env.APP_SECRET || 'changethis');
  } catch(e) {
    debugger;
    return res.status(401).json({msg: 'authenticat seyzz meow'});
  }
  User.findOne({_id: decoded.id}, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(401).json({msg: 'authenticat seyzz meow'});
    }

    if (!user) return res.status(401).json({msg: 'authenticat seyzz meow'});

    req.user = user;
    next();
  });
};
