const express = require('express');
const app = express();

const helloRouter = express.Router();
const goodbyeRouter = express.Router();

helloRouter.use((req, res, next) => {
  req.awesome = 'not as awesome';
  console.log('inside hello use middleware');
  next();
});

goodbyeRouter.use((req, res, next) => {
  req.awesome = 'super awesome';
  console.log('inside goodbye use middleware');
  next();
});

goodbyeRouter.get('/bye', (req, res, next) => {
  res.status(200).json({msg: 'goodbye world ' + req.awesome});
  next();
});

helloRouter.use('/bye', goodbyeRouter);

helloRouter.get('/hello', (req, res) => {
  res.status(200).json({msg: 'hello world'});
});

helloRouter.get('/hello/:name', (req, res) => {
  res.status(200).json({msg: 'hello ' + req.params.name});
});

app.use('/api', helloRouter);
app.get('/api/hello', (req, res) => {
  res.status(200).json({msg: 'hello from app'});
});

app.listen(3000, () => {
  console.log('server up');
});
