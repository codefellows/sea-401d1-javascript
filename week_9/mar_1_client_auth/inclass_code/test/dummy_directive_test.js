var angular = require('angular');

describe('dummy directive', () => {
  var $rootScope;
  var $compile;

  beforeEach(angular.mock.module('bearsApp'));

  beforeEach(angular.mock.inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('should render with a two way data binding', () => {
    var element = $compile('<div data-dummy-directive data-greeting="test greeting"></div>')($rootScope);
    $rootScope.$digest();
    expect(element.html()).toContain('test greeting');
  });
});
