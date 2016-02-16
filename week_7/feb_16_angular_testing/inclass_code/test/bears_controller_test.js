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
  });
});
