'use strict';

/**
 * @ngdoc filter
 * @name buttyApp.filter:sanitize
 * @function
 * @description
 * # sanitize
 * Filter in the buttyApp.
 */
angular.module('buttyApp')
  .filter('sanitize', ['$sce', function ($sce) {
    return function (input) {
      return $sce.trustAsHtml(input);
	};
  }]);