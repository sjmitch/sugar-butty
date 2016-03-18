'use strict';

/**
 * @ngdoc directive
 * @name buttyApp.directive:dxContent
 * @description
 * # dxContent
 */
angular.module('buttyApp')
  .directive('dxContent', function (global) {
    return {
      templateUrl: 'views/templates/_content.html',	
	  replace: true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        
		 scope.fn = global.fn;
		 scope.data = global.data;
		  
		 //  console.log('LINKED content');
		  
      }
    };
  });
