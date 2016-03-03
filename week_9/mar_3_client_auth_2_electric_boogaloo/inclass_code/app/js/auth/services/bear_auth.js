module.exports = function(app) {
  app.factory('bearAuth', ['$http', '$window', function($http, $window) {
    var token;
    var user;
    return {
      createUser: function(user, cb) {
        cb  =  cb || function(){};
        $http.post('http://localhost:3000/api/signup', user)
          .then(function(res) {
            token = $window.localStorage.token = res.data.token;
            cb(null);
          }, function(res) {
            console.log(res);
            cb(res.err);
          });
      },
      getToken: function() {
        token = token || $window.localStorage.token;
        return token;
      }
    };
  }]);
};
