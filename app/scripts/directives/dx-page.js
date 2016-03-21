'use strict';

/**
 * @ngdoc directive
 * @name buttyApp.directive:dxPage
 * @description
 * # dxPage
 */
angular.module('buttyApp')
  .directive('dxPage', function (global,$http,$window,$timeout) {
    return {
      templateUrl: 'views/templates/_page.html',
	  replace: true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
		  
		  var win = angular.element($window);
		  
		  scope.fn = global.fn;
		  scope.data = global.data;
		  
		  global.data.pristine = true;
		  
		  //get colours data
		  scope.getcolours = function(){
			
			  // get colours
			  $http.get('data/colours.json').
    			success(function(data, status, headers, config) { 
				  	// primary
    			  	global.colourlist = data.primary;
				  	// accent
					global.accentlist = data.accent;															 
					// set random theme
					scope.settheme();											 

    			}).
    			error(function(data, status, headers, config) {
      				 alert(status);
    		});
		  };
		  
		  // set random theme
		  scope.settheme = function(){			
			  // set primary
			  global.theme = global.colourlist[Math.floor(Math.random() * global.colourlist.length)];
			  scope.theme = global.theme;
			  // set accent
			  global.accent = global.accentlist[Math.floor(Math.random() * global.accentlist.length)];
			  scope.accent = global.accent;
		  };

		  scope.getcolours();

		  global.fn.settheme = scope.settheme;
		  
		  
		  // set invert
		  scope.setinvert = function(){			
			  
			  scope.data.invert ? scope.data.invert = false: scope.data.invert = true;
			  global.data.invert = scope.data.invert;
		  };
		  
		  global.fn.setinvert = scope.setinvert;
		  
		  	// ON WINDOW RESIZE /////////////////////////////////////////////////////////
			win.bind('resize', function () {
				scope.screenresize();
			});

			scope.screenheight = function(){
				scope.data.screenheight = win.height();
				global.data.screenheight = scope.data.screenheight;
				
				$timeout(function() {
            		scope.$apply();
            	}, 0, false);
				
			};

			scope.screenwidth = function(){
				scope.data.screenwidth = win.width() + 'px';
				global.data.screenwidth = scope.data.screenwidth;
				
				$timeout(function() {
            		scope.$apply();
            	}, 0, false);
			};

			scope.screenresize = function(){
				scope.screenheight();
				scope.screenwidth();
			};

			scope.screenresize();
			//////////////////////////////////////////////////////////////////////////////
		  
		  // ON WINDOW SCROLL /////////////////////////////////////////////////////////
		  scope.lastScrollTop = 0;
		  
		  
			win.bind('scroll', function () {
				scope.scroll();
			});

			scope.scroll = function(){
			
				var top =  win.scrollTop();	

				if (scope.lastScrollTop === 0) {
					scope.scrollTo();
				} 
					scope.lastScrollTop = top;
						 
			};
		  
		  scope.scrollTo = function(){
			  	var main = angular.element(document.querySelector('#main'));
				var maintop = main.offset().top;
				//var header = angular.element(document.querySelector('#header'));
				var headerheight = angular.element(document.querySelector('#header')).prop('offsetHeight');

				$('html,body').animate({scrollTop: maintop - headerheight }, "slow");
			  
			  $timeout(function() {
            		scope.$apply();
            	}, 0, false);
		  };
		  
		  global.fn.scrollTo = scope.scrollTo;

			//////////////////////////////////////////////////////////////////////////////
		  
		  	// log
		  	console.log(global.data);
      }
    };
  });
