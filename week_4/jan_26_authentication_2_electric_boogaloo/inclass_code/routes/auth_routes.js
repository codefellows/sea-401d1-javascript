const express = require('express');
const User = require(__dirname + '/../models/user');
const jsonParser = require('body-parser').json();
const handleDBError = require(__dirname + '/../lib/handle_db_error');

var authRouter = module.exports = exports = express.Router();

authRouter.post('/signup', jsonParser, (req, res) => {
  var newUser = new User();
  if (!((req.body.email || '').length && (req.body.password || '').length > 7)) {
    return res.status(400).json({msg: 'invalid username or password'});
  }

  newUser.username = req.body.username || req.body.email;
  newUser.authentication.email = req.body.email;
  newUser.hashPassword(req.body.password);
  newUser.save((err, data) => {
    if (err) return handleDBError(err, res);
    res.status(200).json({msg: 'success'}); //to be replaced with an auth token
  });
});
