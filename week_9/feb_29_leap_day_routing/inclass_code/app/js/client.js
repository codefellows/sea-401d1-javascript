var angular = require('angular');
require('angular-route');

var routesApp = angular.module('routesApp', ['ngRoute']);
routesApp.filter('linkFilter', function() {
  return function(input) {
    return 'Go ' + input[0].toUpperCase() + input.slice(1);
  };
});

routesApp.controller('firstController', ['$scope', function($scope) {
  $scope.greeting = 'hello world';
  $scope.link = 'awesome';
}]);

routesApp.controller('fromLocation', ['$scope', '$location', '$routeParams', '$timeout', function($scope, $location, params, $timeout) {
  $scope.greeting = params.greeting;
  $scope.link = 'home';
  $scope.goHome = function() {
    $location.path('/home');
  };
}]);

routesApp.config(['$routeProvider', function(routes) {
  routes.when('/home', {
    controller: 'firstController',
    templateUrl: '/views/home.html'
  })
  .when('/:greeting*', {
    controller: 'fromLocation',
    templateUrl: '/views/home.html'
  }) ;
}]);
