'use strict';

describe('Directive: dxContent', function () {

  // load the directive's module
  beforeEach(module('buttyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dx-content></dx-content>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dxContent directive');
  }));
});
