angular.module('myapp').controller('ContactCtrl', function ($scope, contact) {
    contact.getContact().then(function (data) {
       $scope.Contact = data.data; 
    });
    
})