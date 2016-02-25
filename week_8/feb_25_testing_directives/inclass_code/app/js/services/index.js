module.exports = function(app) {
  require('./cf_store')(app);
  require('./resource_service')(app);
};
