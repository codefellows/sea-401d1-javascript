const express = require('express');
const jsonParser = require('body-parser').json();
const Bear = require(__dirname + '/../models/bear');
const handleDBError = require(__dirname + '/../lib/handle_db_error');
const jwtAuth = require(__dirname + '/../lib/jwt_auth');

var bearRouter = module.exports = exports = express.Router();

bearRouter.get('/bears', (req, res) => {
  Bear.find({}, (err, data) => {
    if (err) return handleDBError(err, res);

    res.status(200).json(data);
  });
});

bearRouter.get('/mybears', jwtAuth, (req, res) => {
  Bear.find({wranglerId: req.user._id}, (err, data) => {
    if (err) return handleDBError(err, res);

    res.status(200).json(data);
  });

});

bearRouter.post('/bears', jwtAuth, jsonParser, (req, res) => {
  var newBear = new Bear(req.body);
  newBear.wranglerId = req.user._id;
  newBear.save((err, data) => {
    if (err) return handleDBError(err, res);    

    res.status(200).json(data);
  });
});

bearRouter.put('/bears/:id', jwtAuth, jsonParser, (req, res) => {
  var bearData = req.body;
  delete bearData._id;
  Bear.update({_id: req.params.id}, bearData, (err) => {
    if (err) return handleDBError(err, res);

    res.status(200).json({msg: 'success'});
  });
});

bearRouter.delete('/bears/:id', jwtAuth, (req, res) => {
  Bear.remove({_id: req.params.id}, (err) => {
    if (err) return handleDBError(err, res);

    res.status(200).json({msg: 'success'});
  });
});
