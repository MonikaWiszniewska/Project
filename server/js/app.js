angular.module('myapp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('main', {
        url: "/main",
        controller: 'MenuCrtl',
        templateUrl: "partials/main.html"
    });
});