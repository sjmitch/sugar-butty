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
		  
		  scope.fn = global.fn;
		  scope.data = global.data;
		  
		  // toggle menu
		  element.click(function($event){
		  	// toggle menu display
		  	scope.data.menuopen ? scope.fn.menucontrol($event) : null;
			//  scroll to content
			scope.fn.scrollTo(); 
		  });
		 
        console.log('LINKED menu');
      }
    };
  });

