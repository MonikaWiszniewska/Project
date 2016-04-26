angular.module('myapp').controller('MainCtrl', function ($scope, menu, ingredients) {
   $scope.Menu = menu;
   $scope.Ingredients = ingredients;
});