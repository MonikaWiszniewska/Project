angular.module('myapp').factory('menu', function($http) {
	return {
		getItems : function getItems() {
			// return [];
			return $http.get('/menu');
		}
	};
});

angular.module('myapp').factory('ingredients', function($http) {
	return {
		getIngredients : function getIngredients() {
			return $http.get('/ingredients');
		}
	};
});