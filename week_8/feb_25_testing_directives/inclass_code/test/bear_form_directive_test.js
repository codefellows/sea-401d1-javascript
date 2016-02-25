var angular = require('angular');
var template = require('../app/templates/bears/directives/bear_form_directive.html');

describe('bear form directive', () => {
  var $compile;
  var $rootScope;
  var $httpBackend;

  beforeEach(angular.mock.module('bearsApp'));
  
  beforeEach(angular.mock.inject(function(_$compile_, _$rootScope_, _$httpBackend_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
  }));

  it('should load the directive', () => {
    $httpBackend.when('GET', '/templates/bears/directives/bear_form_directive.html').respond(200, template);

    var element = $compile('<bear-form data-bear="{}" data-button-text="test button"></bear-form>')($rootScope);
    $httpBackend.flush();
    $rootScope.$digest();
    expect(element.html()).toContain('test button');
  });
});
