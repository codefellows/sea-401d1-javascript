const express = require('express');
const app = module.exports = exports = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/bears_app_dev');

const bearsRouter = require(__dirname + '/routes/bears_routes');
const authRouter = require(__dirname + '/routes/auth_routes');

app.use('/api', bearsRouter);
app.use('/api', authRouter);

var PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('server up on port: ' + PORT));
