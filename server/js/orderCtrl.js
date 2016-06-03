angular.module('myapp').controller('OrderCtrl', function ($state, $scope, menu, ingredients, order) {
        
        menu.getItems().then(function (data) {
        $scope.Menu = data.data; });
        
        ingredients.getIngredients().then(function(data) {
            $scope.Ingredients = data.data;
        });
        

        $scope.orderInfo = {};
        var basket = Array(sessionStorage.cart);
         var orderData = {
            order: [],
            extras: [],
            orderInfo: {}
        };
        
        console.log(basket);
        
        JSON.parse(basket).forEach(function(element){
                    orderData.order.push({
                        id: element.id,
                        quantity: element.count
                        });
                 
        });


        orderData.orderInfo = $scope.orderInfo;
        $scope.Test = orderData;
         
         
        $scope.submitForm = function(form){
            if(form.$valid) {
                order.sendOrder(orderData).then(function (result) {
                //console.log(result); 
                $scope.id = result.data.id; 
                $state.go('status', {orderId: $scope.id});
                console.log($scope.id);
            }, function(error) {
            $scope.errorMessage = "Błąd wysyłania " + error.message;
            });
          }
        };
        
        $scope.back = function(){
            $state.go('menu');
        };
    
});
