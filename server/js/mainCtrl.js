angular.module('myapp').controller('MainCtrl', function ($scope, menu) {
    menu.getItems().then(function (data) {
       $scope.Menu = data.data; 
    });
//     console.log(menu.getItems());
//    $scope.Menu = menu;
//    $scope.Ingredients = ingredients;
})
