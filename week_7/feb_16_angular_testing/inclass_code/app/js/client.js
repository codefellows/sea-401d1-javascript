const angular = require('angular');
const bearsApp = angular.module('bearsApp', []);

bearsApp.controller('BearsController', ['$scope', '$http', function($scope, $http) {
  $scope.greeting = 'hello world';
  $scope.bears = [];

  $scope.getAll = function() {
    $http.get('http://localhost:3000/api/bears')
      .then((res) => {
        console.log('success!');
        $scope.bears = res.data;
      }, (err) => {
        console.log(err);
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
