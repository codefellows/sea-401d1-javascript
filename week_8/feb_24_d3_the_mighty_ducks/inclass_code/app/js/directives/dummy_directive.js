module.exports = function(app) {
  app.directive('dummyDirective', function() {
    return {
      restrict: 'AC',
      template: '<h1>{{greeting}}</h1><input data-ng-model="greeting" type="text">',
      scope: {
        greeting: '@'
      }
    };
  });
};
