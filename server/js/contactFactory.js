angular.module('myapp').factory('contact', function($http) {
	return {
		getContact : function getContact() {
			// return [];
			return $http.get('/contact');
		}
	};
});