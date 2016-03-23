'use strict';

/**
 * @ngdoc directive
 * @name buttyApp.directive:dxMenu
 * @description
 * # dxMenu
 */
angular.module('buttyApp')
  .directive('dxMenu', function (global,$window,$http) {
    return {
      templateUrl: 'views/partials/_menu.html',
	  replace: true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
		  
		  scope.fn = global.fn;
		  scope.data = global.data;
		  
		  // set current view
		  scope.setview = function(){
			 var view = $window.location.href;
			 scope.data.view = view.split('#')[1];
		  };
		  
		  if (!scope.data.view) scope.setview();   
		  
		  // toggle menu
		  element.click(function($event){
			// update active link
			scope.$watch('location.path()', function () {
         		scope.setview();
        	});  
			// toggle menu display
			scope.data.menuopen ? scope.fn.menucontrol($event) : null;
			// scroll to content
			scope.fn.scrollTo(); 
		  });
		  
		  //get menu data
		  scope.getmenu = function(){

			  $http.get('data/menu.json').
    			success(function(data, status, headers, config) { 
				
    			  	scope.data.menu = data.menu;																							 
    			}).
    			error(function(data, status, headers, config) {
      				 alert(status);
    		});
		  };
		  
		scope.getmenu();
		 
        console.log('LINKED menu');
      }
    };
  });

