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
        
		  
		 // NAVBAR DISPLAY /////////////////////////////////////////////////////////
		  
		 scope.data.navbaropen = false;
		  
		 scope.navbarcontrol = function($event){
			 
			  scope.data.sidebaropen = false;
			 
			  scope.data.navbaropen ? scope.data.navbaropen = false : scope.data.navbaropen = true ;
			 
			 global.data.sharebartools = false 
			 
			  $timeout(function() {
            		scope.$apply();
            	}, 0, false);
			 
			  $event.stopPropagation();
		
		  };
		  
		 // SIDEBAR DISPLAY /////////////////////////////////////////////////////////
		  
		 scope.data.sidebaropen = false;
		  
		 scope.sidebarcontrol = function($event){
			 
			  scope.data.navbaropen = false;	  

			  scope.data.sidebaropen ? scope.data.sidebaropen = false : scope.data.sidebaropen = true ;
			 
			  $timeout(function() {
            		scope.$apply();
            	}, 0, false);
			 
			  $event.stopPropagation();
		
		  };
		  
		  
		  // scroll to top /////////////////////////////////////////////////////////
		  
		  scope.scrolltotop = function(){
			
			  // close menus
			  scope.data.navbaropen = false;
			  scope.data.sidebaropen = false;
			  
			  $('html,body').animate({scrollTop: 0 }, "slow");
			  
			  $timeout(function() {
            		scope.$apply();
            	}, 0, false);
		  };
		 
		  
		  // add functions to global 
		  global.fn.navbarcontrol = scope.navbarcontrol;
		  global.fn.sidebarcontrol = scope.sidebarcontrol;
		  global.fn.scrolltotop = scope.scrolltotop;

		  console.log('LINKED header');

      }
    };
  });
