const express = require('express');

express()
  .use(express.static(__dirname + '/build'))
  .use((req, res, next) => {
    res.predirect('/#' + req.url);
  })
  .listen(5000, () => console.log('server up'));

