'use strict';

/**
 * @ngdoc directive
 * @name buttyApp.directive:dxTabs
 * @description
 * # dxTabs
 */
angular.module('buttyApp')
  .directive('dxTabs', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the dxTabs directive');
      }
    };
  });
