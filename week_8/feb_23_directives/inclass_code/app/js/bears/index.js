module.exports = function(app) {
  require('./controllers/bears_controller')(app);

  require('./directives/bear_display_directive')(app);
};
