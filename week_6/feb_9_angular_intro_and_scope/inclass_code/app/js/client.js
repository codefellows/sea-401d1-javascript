const angular = require('angular');

const bearsApp = angular.module('bearsApp', []);

bearsApp.controller('bearsController', ['$scope', ($scope) => {
  $scope.greeting = 'hello world';
}]);
