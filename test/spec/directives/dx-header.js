'use strict';

describe('Directive: dxHeader', function () {

  // load the directive's module
  beforeEach(module('buttyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dx-header></dx-header>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dxHeader directive');
  }));
});
