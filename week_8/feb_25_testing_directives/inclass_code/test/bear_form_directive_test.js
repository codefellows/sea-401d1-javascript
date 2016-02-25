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

  it('should be able to call a passed save function', () => {
    var scope = $rootScope.$new();
    $httpBackend.when('GET', '/templates/bears/directives/bear_form_directive.html').respond(200, template);
    var called = false;
    scope.bear = {name: 'inside scope'};
    
    scope.testSave = function(input) {
      expect(input.name).toBe('from directive');
      scope.bear = input;
      called = true;
    };

    var element = $compile('<bear-form data-bear="{name: \'inside directive\'}" data-save=testSave></bear-form>')(scope);
    $httpBackend.flush();
    $rootScope.$digest();

    element.isolateScope().save(scope)({name: 'from directive'});
    expect(called).toBe(true);
    expect(scope.bear.name).toBe('from directive');
  });
});
