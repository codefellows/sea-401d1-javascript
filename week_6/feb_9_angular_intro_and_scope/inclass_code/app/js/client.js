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
}]);
