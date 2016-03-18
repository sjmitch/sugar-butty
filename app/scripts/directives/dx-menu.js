'use strict';

/**
 * @ngdoc directive
 * @name buttyApp.directive:dxMenu
 * @description
 * # dxMenu
 */
angular.module('buttyApp')
  .directive('dxMenu', function (global) {
    return {
      templateUrl: 'views/partials/_menu.html',
	  replace: true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
		 
        console.log('LINKED menu');
      }
    };
  });

