module.exports = function(app) {
  app.controller('authController', ['$scope', 'bearAuth', function($scope, bearAuth) {
    $scope.username = null;

    $scope.updateUsername = function() {
      bearAuth.getUsername(function(res) {
        console.log(res);
        $scope.username = res.data.username;
      });
    };

    $scope.logout = function() {
      bearAuth.signOut(function() {
        $scope.username = null;
      });
    };
  }]);
};
