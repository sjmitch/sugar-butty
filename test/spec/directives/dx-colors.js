'use strict';

describe('Directive: dxColors', function () {

  // load the directive's module
  beforeEach(module('buttyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dx-colors></dx-colors>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dxColors directive');
  }));
});
