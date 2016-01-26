const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
  username: String,
  authentication: {
    email: String,
    password: String
  }
});

userSchema.methods.hashPassword = function(password) {
  var hash = this.authentication.password = bcrypt.hashSync(password, 8);
  return hash;
};

userSchema.methods.compareHash = function(password) {
  return bcrypt.compareSync(password, this.authentication.password);
};

module.exports = exports = mongoose.model('User', userSchema);
