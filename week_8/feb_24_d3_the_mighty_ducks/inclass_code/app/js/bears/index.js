module.exports = function(app) {
  require('./controllers/bears_controller')(app);

  require('./directives/bear_display_directive')(app);
  require('./directives/bear_form_directive')(app);
};
