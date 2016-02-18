const angular = require('angular');
const bearsApp = angular.module('bearsApp', []);
require('./services/resource_service')(bearsApp);

bearsApp.controller('BearsController', ['$scope', '$http', 'cfResource', function($scope, $http, Resource) {
  $scope.greeting = 'hello world';
  $scope.bears = [];
  var bearService = Resource('/bears');


  $scope.getAll = function() {
    bearService.getAll(function(err, res) {
      if (err) return console.log(err);
      $scope.bears = res;
    });
  };

  $scope.createBear = function(bear) {
    bearService.create(bear, function(err, res) {
      if (err) return console.log(err);
      $scope.bears.push(res);
      $scope.newBear = null;
    });
  };

  $scope.deleteBear = function(bear) {
    bearService.delete(bear, function(err, res) {
      if (err) return console.log(err);
      $scope.bears.splice($scope.bears.indexOf(bear), 1);
    });
  };

  $scope.updateBear = function(bear) {
    bearService.update(bear, function(err, res) {
      bear.editing = false;
      if (err) return console.log(err);
    });
  };
}]);
