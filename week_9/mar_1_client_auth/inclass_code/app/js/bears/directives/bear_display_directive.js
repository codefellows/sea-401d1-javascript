module.exports = function(app) {
  app.directive('bear', function() {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: '/templates/bears/directives/bear.html',
      scope: {
        bearData: '='
      }
    };
  });
};
