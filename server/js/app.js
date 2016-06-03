//https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#naming
//https://www.npmjs.com/package/gulp-watch
//do 6czerwca rano


angular.module('myapp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('main', {
        url: "/main",
        views: {
        	'': {templateUrl: "partials/main.html",
        		controller: 'MainCtrl'},
    		'cart': {templateUrl: "partials/cart.html",
    			controller: 'MenuCtrl'}
    		}
    })
    .state('menu', {
        url: "/menu",
        views: {
        	'': {templateUrl: "partials/menu.html",
        		controller: 'MenuCtrl'},
    		'cart': {templateUrl: "partials/cart.html",
    			controller: 'MenuCtrl'}
    		}
    })
    .state('finalizeorder', {
        url: "/finalizeorder",
        views: {
        	'cart': {templateUrl: "partials/cart.html",
    			controller: 'MenuCtrl'},
    		'': {templateUrl: "partials/finalizeorder.html",
        		controller: 'OrderCtrl'},
			}
    })
    .state('contact', {
        url: "/contact",
        controller: 'ContactCtrl',
        templateUrl: "partials/contact.html"
    })
    .state('status', {
        url: "/status/:orderId",
        controller: 'StatusCtrl',
        templateUrl: "partials/status.html"
    });
});