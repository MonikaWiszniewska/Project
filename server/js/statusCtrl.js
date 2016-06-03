angular.module('myapp').controller('StatusCtrl', function ($scope, $stateParams, $state, orderStatus) {

    //console.log($stateParams.orderId);
    
    orderStatus.getOrderStatus($stateParams.orderId).then(function (data) {
        $scope.orderStatus = data.data;
        console.log($scope.orderStatus);
        var timeLeft = new Date($scope.orderStatus.estimated).getTime() - Date.now();
        timeLeft = timeLeft/1000/60;
        console.log(timeLeft);
        if(timeLeft>0){
            $scope.result = "Pozostało " + Math.round(timeLeft,0) + " minut";
        }else{
            $scope.result = "Pizza już puka do drzwi";
        }
    });
    
    $scope.back = function(){
            $state.go('menu');
        };
})