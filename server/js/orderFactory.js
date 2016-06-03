angular.module('myapp').factory('order', function($http) {
	return {
		sendOrder : function sendOrder(orderData) {
			return $http.post('/order', orderData);
            //
		}
	};
});

angular.module('myapp').factory('orderStatus', function($http) {
	return {
		getOrderStatus : function getOrderStatus(orderId) {
			return $http.get('/order/' + orderId);
		}
	};
});