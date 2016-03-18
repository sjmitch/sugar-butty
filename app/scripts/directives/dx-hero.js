'use strict';

/**
 * @ngdoc directive
 * @name buttyApp.directive:dxHero
 * @description
 * # dxHero
 */
angular.module('buttyApp')
  .directive('dxHero', function (global) {
    return {
      templateUrl: 'views/templates/_hero.html',
	  replace: true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
		  
		  scope.fn = global.fn;
		  scope.data = global.data;

        	console.log('LINKED hero');

      }
    };
  });
