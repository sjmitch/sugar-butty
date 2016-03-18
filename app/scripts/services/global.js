'use strict';

/**
 * @ngdoc service
 * @name buttyApp.global
 * @description
 * # global
 * Service in the buttyApp.
 */
angular.module('buttyApp')
  .service('global', function () {
      
	return {
		details: {
			info: {
				author: 'Stephen Mitchell',
				message: 'I am available for work :)',
				homepage: 'sugarbutty.com',
				contact: 'stephen@sugarbutty.com',
				linkedin: 'fr.linkedin.com/in/sugarbutty'
			}
		},
		name: ['Sugar', 'Bütty'],
		fn: {},
		data: {}
  	};
	
  });