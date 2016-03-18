'use strict';

/**
 * @ngdoc directive
 * @name buttyApp.directive:dxLogo
 * @description
 * # dxLogo
 */
angular.module('buttyApp')
  .directive('dxLogo', function (global) {
    return {
      templateUrl: 'views/templates/_logo.html',
	  replace: true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
		  scope.name = global.name;
		  scope.fn = global.fn;
		  scope.data = global.data;
		  
		  // toggle menu
		  element.click(function($event){
			//  toggle menu display
			scope.fn.menucontrol($event);
			  
		  })

        //	console.log('LINKED logo');
      }
    };
  });

