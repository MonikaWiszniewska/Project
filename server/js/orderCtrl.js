angular.module('myapp').controller('OrderCtrl', function ($scope, menu, ingredients) {
    menu.getItems().then(function (data) {
       $scope.Menu = data.data; 
    });
    
    ingredients.getIngredients().then(function(data) {
    	$scope.Ingredients = data.data;
    });
    
    
    
})
