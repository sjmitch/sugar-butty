'use strict';

/**
 * @ngdoc overview
 * @name buttyApp
 * @description
 * # buttyApp
 *
 * Main module of the application.
 */
angular
  .module('buttyApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
	  .when('/bacon', {
        templateUrl: 'views/bacon.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
	  .when('/colours', {
        templateUrl: 'views/colours.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
