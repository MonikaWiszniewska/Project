//https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#naming
//https://www.npmjs.com/package/gulp-watch
//do 6czerwca rano


angular.module('myapp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('main', {
        url: "/main",
        controller: 'MainCtrl',
        // controller: function () {},
        templateUrl: "partials/main.html"
    });
});