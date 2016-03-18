'use strict';

/**
 * @ngdoc directive
 * @name buttyApp.directive:dxColors
 * @description
 * # dxColors
 */
angular.module('buttyApp')
  .directive('dxColours', function (global) {
    return {
      templateUrl: 'views/partials/_colours.html',
	  replace: true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
		  
		  scope.fn = global.fn;
		  scope.data.invert = global.data.invert;
		  
		  scope.colours = global.colourlist;
		  scope.accent = global.accentlist;

        	//console.log('LINKED colours');

      }
    };
  });
