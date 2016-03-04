module.exports = function(app) {
  app.controller('SignupController', ['$scope', '$location', 'bearAuth', function($scope, $location, auth) {
    $scope.signup = true;
    $scope.submit = function(user) {
      auth.createUser(user, function() {
        $scope.updateUsername();
        $location.path('/home');
      });
    };
  }]);
};
