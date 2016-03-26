'use strict';

/**
 * @ngdoc directive
 * @name buttyApp.directive:dxFooter
 * @description
 * # dxFooter
 */
angular.module('buttyApp')
  .directive('dxFooter', function (global) {
    return {
      templateUrl: 'views/templates/_footer.html',
	  replace: true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
		 
		  scope.fn = global.fn;
		  
		  scope.footertools = function(){
			  scope.data.footertools ? scope.data.footertools = false : scope.data.footertools = true ;
		  };
		  
		  global.fn.footertools = scope.footertools;
		  
        	console.log('LINKED footer');

      }
    };
  });
