'use strict';

describe('Directive: dxTabs', function () {

  // load the directive's module
  beforeEach(module('buttyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dx-tabs></dx-tabs>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dxTabs directive');
  }));
});
