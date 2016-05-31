angular.module('myapp').controller('OrderCtrl', function ($state, $scope, menu, ingredients, order) {
    $scope.orderData = {};
    menu.getItems().then(function (data) {
       $scope.Menu = data.data; });
       
       $scope.submitForm = function(form){
        if(form.$valid) {
            order.sendOrder($scope.orderData).then(function (data) {
               console.log(data); 
            $scope.id = data.data; 
            });
            console.log($scope.id);
        }
       }
       $scope.back = function(){
           $state.go('menu');
       }
    
    ingredients.getIngredients().then(function(data) {
    	$scope.Ingredients = data.data;
    }) 
});
