angular.module('myapp').factory('menu', function ($http) {
    return {
        getItems: function getItems() {
            //return [];
            return $http.get('/menu');
        }
    };
})