const angular = require('angular');
const bearsApp = angular.module('bearsApp', []);
require('./services/resource_service')(bearsApp);

bearsApp.controller('BearsController', ['$scope', '$http', 'Resource', function($scope, $http, Resource) {
  $scope.greeting = 'hello world';
  $scope.bears = [];
  var bearService = Resource('/bears');


  $scope.getAll = function() {
    bearService.getAll(function(err, res) {
      if (err) console.log(err);
      $scope.bears = res;
    });
  };

  $scope.createBear = function(bear) {
    $http.post('http://localhost:3000/api/bears', bear)
      .then((res) => {
        $scope.bears.push(res.data);
        $scope.newBear = null;
      }, (err) => {
        console.log(err);
      });
  };

  $scope.deleteBear = function(bear) {
    $http.delete('http://localhost:3000/api/bears/' + bear._id)
      .then((res) => {
        $scope.bears.splice($scope.bears.indexOf(bear), 1);
      }, (err) => {
        console.log(err);
      });
  };

  $scope.updateBear = function(bear) {
    $http.put('http://localhost:3000/api/bears/' + bear._id, bear)
      .then((res) => {
        bear.editing = false;
      }, (err) => {
        console.log(err);
        bear.editting = false;
      });
  };
}]);
