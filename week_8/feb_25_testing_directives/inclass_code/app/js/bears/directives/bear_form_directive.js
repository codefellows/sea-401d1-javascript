module.exports = function(app) {
  app.directive('bearForm', function() {
    return {
      restrict: 'EAC',
      replace: true,
      transclude: true,
      templateUrl: '/templates/bears/directives/bear_form_directive.html',
      scope: {
        buttonText: '@',
        bear: '=',
        save: '&'
      },
      controller: function($scope) {
        $scope.bear = $scope.bear || {fishPreference: 'salmons', flavor: 'grizzly'};
      }
    };
  });
};
