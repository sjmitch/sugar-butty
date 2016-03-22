'use strict';

/**
 * @ngdoc filter
 * @name buttyApp.filter:split
 * @function
 * @description
 * # split
 * Filter in the buttyApp.
 */
angular.module('buttyApp')
  .filter('split', function () {
    return function (input, splitChar, splitIndex) {
      return input.split(splitChar)[splitIndex];
    };
  });