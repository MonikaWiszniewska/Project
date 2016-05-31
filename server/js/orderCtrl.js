angular.module('myapp').controller('OrderCtrl', function ($state, $scope, menu, ingredients) {
    menu.getItems().then(function (data) {
       $scope.Menu = data.data; });
       $scope.submitForm = function(form){
        if(form.$valid) {
            console.log($scope.phone);
             console.log($scope.street);
             console.log($scope.remarks);
        }
       }
       $scope.back = function(){
           $state.go('menu');
       }
    
    ingredients.getIngredients().then(function(data) {
    	$scope.Ingredients = data.data;
    }) 
});
