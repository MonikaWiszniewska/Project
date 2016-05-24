angular.module('myapp').controller('MainCtrl', function ($scope, menu) {
    menu.getItems().then(function (data) {
       $scope.Menu = data.data; 
    });
//     console.log(menu.getItems());
//    $scope.Menu = menu;
//    $scope.Ingredients = ingredients;
})
.factory('menu', function ($http) {
    return {
        getItems: function getItems() {
            //return [];
            return $http.get('/menu');
        }
    };
})