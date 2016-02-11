const angular = require('angular');

const bearsApp = angular.module('bearsApp', []);

bearsApp.controller('bearsController', ['$scope', '$http', ($scope, $http) => {
  $scope.greeting = 'hello world';
  $scope.bears = [];

  $http.get('http://localhost:3000/api/bears')
    .then((res) => {
      console.log('success!');
      $scope.bears = res.data;
    }, (err) => {
      console.log(err);
    });

  $scope.createBear = function(bear) {
    $http.post('http://localhost:3000/api/bears', bear)
      .then((res) => {
        $scope.bears.push(res.data);
        $scope.newBear = null;
      }, (err) => {
        console.log(err);
      })
  }

  $scope.deleteBear = function(bear) {
    $http.delete('http://localhost:3000/api/bears/' + bear._id)
      .then((res) => {
        $scope.bears = $scope.bears.filter((i) => i !== bear);
      }, (err) => {
        console.log(err)
      })
  }
  
}]);
