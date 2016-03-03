module.exports = function(app) {
  require('./services/bear_auth')(app);
  require('./controllers/signup_controller')(app);
  require('./controllers/signin_controller')(app);
};
