require('../app/js/client');
var angular = require('angular');
require('angular-mocks');

describe('bears controller', () => {
  var $httpBackend;
  var $scope;
  var $ControllerConstructor;

  beforeEach(angular.mock.module('bearsApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    $ControllerConstructor = $controller; 
    $scope = $rootScope.$new();
  }));

  it('should be able to make a controller', () => {
    var bearsController = $ControllerConstructor('BearsController', {$scope});
    expect(typeof bearsController).toBe('object');
    expect(Array.isArray($scope.bears)).toBe(true);
    expect(typeof $scope.getAll).toBe('function');
  });

  describe('REST requests', () => {
    beforeEach(angular.mock.inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $ControllerConstructor('BearsController', {$scope});
    }));

    afterEach(() => {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should make a get request to /api/bears', () => {
      $httpBackend.expectGET('http://localhost:3000/api/bears').respond(200, [{name: 'test bear'}]);
      $scope.getAll();
      $httpBackend.flush();
      expect($scope.bears.length).toBe(1);
      expect($scope.bears[0].name).toBe('test bear');
    });

    it('should create a new bear', () => {
      $httpBackend.expectPOST('http://localhost:3000/api/bears', {name: 'the sent bear'}).respond(200, {name: 'the response bear'});
      $scope.newBear = {name: 'the new bear'};
      $scope.createBear({name: 'the sent bear'});
      $httpBackend.flush();
      expect($scope.bears.length).toBe(1);
      expect($scope.newBear).toBe(null);
      expect($scope.bears[0].name).toBe('the response bear');
    });

    it('should update a bear', () => {
      var testBear = {name: 'inside scope', editing: true, _id: 5};
      $scope.bears.push(testBear);
      $httpBackend.expectPUT('http://localhost:3000/api/bears/5', testBear).respond(200);
      $scope.updateBear(testBear);
      $httpBackend.flush();
      expect(testBear.editing).toBe(false); 
      expect($scope.bears[0].editing).toBe(false);
    });

    it('should murder a bear', () => {
      var testBear = {name: 'condemned bear', _id: 1};
      $scope.bears.push(testBear);
      expect($scope.bears.indexOf(testBear)).not.toBe(-1);
      $httpBackend.expectDELETE('http://localhost:3000/api/bears/1').respond(200);
      $scope.deleteBear(testBear);
      $httpBackend.flush();
      expect($scope.bears.indexOf(testBear)).toBe(-1);
    });
  });
});
