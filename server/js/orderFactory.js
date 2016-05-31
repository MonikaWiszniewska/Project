angular.module('myapp').factory('order', function($http) {
	return {
		sendOrder : function sendOrder(orderData) {
			return $http.post('/order', orderData);
            //
		}
	};
});