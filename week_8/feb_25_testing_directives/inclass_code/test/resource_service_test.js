var angular = require('angular');

describe('resource service', () => {
  beforeEach(angular.mock.module('bearsApp'));

  var $httpBackend;
  var Resource;
  beforeEach(angular.mock.inject(function(_$httpBackend_, cfResource) {
    $httpBackend = _$httpBackend_;
    Resource = cfResource;
  }));

  it('should be a service', () => {
    expect(typeof Resource).toBe('function');
  });
});
