var angular = require('angular');
require('angular-route');

var routesApp = angular.module('routesApp', ['ngRoute']);
routesApp.controller('firstController', ['$scope', function($scope) {
  $scope.greeting = 'hello world';
}]);

routesApp.controller('fromLocation', ['$scope', '$location', '$routeParams', '$timeout', function($scope, $location, params, $timeout) {
  $scope.greeting = params.greeting;
  $timeout(() => {
    $location.path('/home');
  }, 3000);
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
