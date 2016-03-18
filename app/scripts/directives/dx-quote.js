'use strict';

/**
 * @ngdoc directive
 * @name buttyApp.directive:dxQuote
 * @description
 * # dxQuote
 */
angular.module('buttyApp')
  .directive('dxQuote', function ($http) {
    return {
      templateUrl: 'views/partials/_quote.html',
	  replace: true,
      restrict: 'E',
	  scope: {},
      link: function postLink(scope, element, attrs) {
		  
		  var url,quote,author;

		  switch(attrs.type) {

			 case 'qod':
        		url = 'http://quotes.rest/qod.json';
				quote = 'contents.quotes.quote';
				author = 'contents.quotes.author';
				  
				$http({
            		method: 'GET',
            		url: url
					}).success(function(data) { 
						scope.data = data;
						scope.quote = data.contents.quotes[0].quote;
						scope.author = data.contents.quotes[0].author;
					}).error(function(data) {
						
				});
				  
        		break;
				  
			  case 'quotesondesign':
        		url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
				
				 $http({
            		method: 'GET',
            		url: url
					}).success(function(data) { 
						scope.data = data;
						scope.quote = data[0].content;
						scope.author = data[0].title;
					}).error(function(data) {
						
				});
				  
        		break;
				  
		  }	  
		  
        console.log('LINKED quote');
      }
    };
  });
