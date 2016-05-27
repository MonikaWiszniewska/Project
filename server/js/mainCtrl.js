angular.module('myapp').controller('MainCtrl', function ($scope, menu, ingredients) {
    menu.getItems().then(function (data) {
       $scope.Menu = data.data; 
    });
    
    ingredients.getIngredients().then(function(data) {
    	$scope.Ingredients = data.data;
    });
//     console.log(menu.getItems());
//    $scope.Menu = menu;
//    $scope.Ingredients = ingredients;
})
