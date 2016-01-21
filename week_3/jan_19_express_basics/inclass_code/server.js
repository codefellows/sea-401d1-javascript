const express = require('express');
const app = express();

app.get('/hello/:name', 
  (req, res, next) => {
    console.log('hello from middleware');
    req.user = {name: req.params.name};
    next();
  },
  (req, res) => {
    res.status(200).json({msg: 'hello ' + req.user.name});
  });

app.listen(3000, () => console.log('server up'));
