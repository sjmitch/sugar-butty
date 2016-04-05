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
		  
		  scope.sharebartools = function(){
			  scope.data.sharebartools ? scope.data.sharebartools = false : scope.data.sharebartools = true ;
			  global.data.navbaropen = false
		  };
		  
		  global.fn.footertools = scope.footertools;
		  global.fn.sharebartools = scope.sharebartools;
		  
        	console.log('LINKED footer');

      }
    };
  });
