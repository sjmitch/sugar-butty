'use strict';

/**
 * @ngdoc directive
 * @name buttyApp.directive:dxHeader
 * @description
 * # dxHeader
 */
angular.module('buttyApp')
  .directive('dxHeader', function (global,$window,$timeout) {
    return {
      templateUrl: 'views/templates/_header.html',
	  replace: true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
		  
		 scope.fn = global.fn;
		 scope.data = global.data;
		   
		 var win = angular.element($window);
        
		  
		 // MENU DISPLAY /////////////////////////////////////////////////////////
		  
		 scope.data.menuopen = false;
		  
		 scope.menucontrol = function($event){

			  scope.data.menuopen ? scope.data.menuopen = false : scope.data.menuopen = true ;
			 
			  $timeout(function() {
            		scope.$apply();
            	}, 0, false);
			 
			  $event.stopPropagation();
		
		  };
		 
		  
		  // add function to global 
		  global.fn.menucontrol = scope.menucontrol;

		  console.log('LINKED header');

      }
    };
  });
