module.exports = function(app) {
  app.controller('BearsController', ['$scope', '$http', 'cfResource', 'cfStore', function($scope, $http, Resource, cfStore) {
    $scope.greeting = 'hello world';
    $scope.fakeBear={name: 'a fake bear', fishPreference: 'suffering'};
    cfStore.set('greeting', 'hello world');
    $scope.bears = [];
    var bearService = Resource('/bears');


    $scope.getAll = function() {
      bearService.getAll(function(err, res) {
        if (err) return console.log(err);
        $scope.bears = res;
      });
    };

    $scope.createBear = function(bear) {
      $scope.bears.push(bear);
      bearService.create(bear, function(err, res) {
        if (err) return console.log(err);
        $scope.bears.splice($scope.bears.indexOf(bear), 1, res);
        $scope.newBear = null;
      });
    };

    $scope.deleteBear = function(bear) {
      if (!bear._id) return setTimeout(function() {$scope.deleteBear(bear);}, 1000);
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
};
